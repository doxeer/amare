const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require('jsonwebtoken'); // JWT modülü
const app = express();
const port = 5000;
require("dotenv").config();

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;
const jwtSecret = process.env.JWT_SECRET || 'supersecretkey'; // .env dosyasına ekleyin

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

// Admin giriş işlemi
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' }); // Token 1 saat geçerli
    return res.status(200).json({ token });
  } else {
    return res.status(401).send("Invalid username or password");
  }
});

// Middleware to verify the token
const authenticateAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send("Unauthorized");

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(403).send("Forbidden: Invalid token");
    req.admin = decoded;
    next();
  });
};

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

// Yorumları onaylama
app.post("/api/admin/comments/:id/approve", authenticateAdmin, async (req, res) => {
  const commentId = req.params.id;
  try {
    await promisePool.query("UPDATE comments SET approved = 1 WHERE id = ?", [commentId]);
    res.status(200).send("Comment approved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error approving comment");
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
