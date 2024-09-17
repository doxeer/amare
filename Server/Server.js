const express = require("express");
const mysql = require("mysql2");
const cors = require('cors'); // CORS paketini dahil edin
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // CORS desteğini ekleyin
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

// Yorumları alma
app.get("/api/comments/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [rows] = await promisePool.query("SELECT * FROM comments WHERE product_id = ?", [productId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching comments");
  }
});

// Yorum ekleme
app.post("/api/comments", async (req, res) => {
  const { productId, comment, user_name } = req.body;
  try {
    await promisePool.query(
      "INSERT INTO comments (product_id, comment, user_name) VALUES (?, ?, ?)",
      [productId, comment, user_name]
    );
    res.status(201).send("Comment added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding comment");
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
