const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 5000;
require("dotenv").config(); // .env dosyasını yükle

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL bağlantı havuzu
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

// Giriş yapma
app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === adminUsername && password === adminPassword) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
});

// Middleware to check if the request is authenticated
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).send("Unauthorized: No credentials sent!");
  }

  const [scheme, credentials] = authHeader.split(' ');
  if (scheme !== 'Basic' || !credentials) {
    return res.status(401).send("Unauthorized: Invalid credentials!");
  }

  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  if (username === adminUsername && password === adminPassword) {
    next(); // User is authenticated
  } else {
    res.status(403).send("Forbidden: Invalid credentials");
  }
};

// Yorumları ekleme
app.post("/api/comments", async (req, res) => {
  const { productId, comment, user_name, rating } = req.body;
  const finalRating = rating != null ? rating : 0; // rating mevcutsa kullan, değilse 0 olarak ayarla
  try {
    await promisePool.query(
      "INSERT INTO comments (product_id, comment, user_name, rating, approved) VALUES (?, ?, ?, ?, 0)",
      [productId, comment, user_name, finalRating]
    );
    res.status(201).send("Comment added successfully, pending approval.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding comment");
  }
});

// Belirli bir ürünün yorumlarını getirme
app.get("/api/comments/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM comments WHERE product_id = ? AND approved = 1",
      [productId]
    );
    res.json(rows); // Onaylanmış yorumları döndür
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching comments");
  }
});

// Admin paneli: Yorumları listeleme
app.get("/api/admin/comments", authenticateAdmin, async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM comments WHERE approved = 0"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching unapproved comments");
  }
});

// Admin paneli: Yorum onaylama
app.post(
  "/api/admin/comments/:id/approve",
  authenticateAdmin,
  async (req, res) => {
    const commentId = req.params.id;
    try {
      await promisePool.query("UPDATE comments SET approved = 1 WHERE id = ?", [
        commentId,
      ]);
      res.status(200).send("Comment approved successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error approving comment");
    }
  }
);

// Admin paneli: Yorum reddetme
app.post(
  "/api/admin/comments/:id/reject",
  authenticateAdmin,
  async (req, res) => {
    const commentId = req.params.id;
    try {
      await promisePool.query("DELETE FROM comments WHERE id = ?", [commentId]);
      res.status(200).send("Comment deleted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting comment");
    }
  }
);

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
