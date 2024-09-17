const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL bağlantı havuzu
const pool = mysql.createPool({
  host: "82.197.82.52",
  user: "u424757938_dox",
  password: "Doruk210201",
  database: "u424757938_comments",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
const promisePool = pool.promise();

// Yorumları alma (Onaylı yorumları göster)
app.get("/api/comments/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM comments WHERE product_id = ? AND approved = 1", 
      [productId]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching comments");
  }
});

// Yorum ekleme
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

// Admin paneli: Onaylanmamış yorumları listeleme
app.get("/api/admin/comments", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM comments WHERE approved = 0");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching unapproved comments");
  }
});

// Admin paneli: Yorum onaylama
app.post("/api/admin/comments/:id/approve", async (req, res) => {
  const commentId = req.params.id;
  const { approved } = req.body; // approved = 1 ise onayla, 0 ise reddet
  try {
    await promisePool.query("UPDATE comments SET approved = ? WHERE id = ?", [approved, commentId]);
    res.status(200).send("Comment status updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating comment status");
  }
});

// Admin paneli: Yorum reddetme (silme)
app.post("/api/admin/comments/:id/reject", async (req, res) => {
  const commentId = req.params.id;
  try {
    await promisePool.query("DELETE FROM comments WHERE id = ?", [commentId]);
    res.status(200).send("Comment deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting comment");
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
