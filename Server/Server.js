const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5000;
require("dotenv").config();

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;
const jwtSecret = process.env.JWT_SECRET || "supersecretkey";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const promisePool = pool.promise();

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } else {
    return res.status(401).send("Invalid username or password");
  }
});

const authenticateAdmin = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).send("Unauthorized");

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(403).send("Forbidden: Invalid token");
    req.admin = decoded;
    next();
  });
};

app.post("/api/comments", async (req, res) => {
  const { productId, comment, user_name, rating } = req.body;

  if (!productId || !comment || !user_name || rating === undefined) {
    return res.status(400).send("All fields are required");
  }

  try {
    const [result] = await promisePool.query(
      "INSERT INTO comments (product_id, comment, user_name, rating, approved) VALUES (?, ?, ?, ?, 0)",
      [productId, comment, user_name, rating]
    );
    res.status(201).send("Comment added successfully");
  } catch (err) {
    console.error("MySQL Query Error: ", err);
    res.status(500).send("Error adding comment");
  }
});

app.get("/api/admin/comments", authenticateAdmin, async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM comments WHERE approved = 0"
    );
    res.json(rows);
  } catch (err) {
    console.error("MySQL Query Error: ", err);
    res.status(500).send("Error fetching unapproved comments");
  }
});

// Yorum onaylama işlemi
app.post(
  "/api/admin/comments/:id/approve",
  authenticateAdmin,
  async (req, res) => {
    const commentId = req.params.id;

    try {
      const [result] = await promisePool.query(
        "UPDATE comments SET approved = 1 WHERE id = ?",
        [commentId]
      );

      if (result.affectedRows === 0) {
        return res.status(404).send("Comment not found");
      }

      res.status(200).send("Comment approved successfully");
    } catch (err) {
      console.error("MySQL Query Error: ", err);
      res.status(500).send("Error approving comment");
    }
  }
);

// Yorum silme işlemi
app.delete("/api/admin/comments/:id/reject", authenticateAdmin, async (req, res) => {
  const commentId = req.params.id;

  try {
    const [result] = await promisePool.query(
      "DELETE FROM comments WHERE id = ?",
      [commentId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).send("Comment not found");
    }

    res.status(200).send("Comment deleted successfully");
  } catch (err) {
    console.error("MySQL Query Error: ", err);
    res.status(500).send("Error deleting comment");
  }
});
app.get("/api/comments/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM comments WHERE product_id = ? AND approved = 1",
      [productId]
    );
    res.json(rows);
  } catch (err) {
    console.error("MySQL Query Error: ", err);
    res.status(500).send("Error fetching comments");
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
