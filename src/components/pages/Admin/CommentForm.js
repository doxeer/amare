import axios from 'axios';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

const CommentForm = ({ productId }) => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(null); // Yıldız puanı için state ekledik

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/comments', {
        productId,
        comment,
        user_name: userName,
        rating // Yıldız puanını da gönderiyoruz
      });
      alert('Comment added successfully');
      setComment('');
      setUserName('');
      setRating(null); // Yıldız puanını sıfırla
    } catch (err) {
      console.error('Error adding comment', err);
      alert('Error adding comment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_name"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <textarea
        name="comment"
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <div>
        <h4>Rating:</h4>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={30}
            color={i < rating ? "#ffc107" : "#e4e5e9"}
            onClick={() => setRating(i + 1)} // Yıldız tıklanınca puan state'e kaydedilir
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
