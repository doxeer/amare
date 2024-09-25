import axios from "axios";
import "./CommentForm.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CommentForm = ({ productId }) => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/comments", {
        productId,
        comment,
        user_name: userName,
        rating,
      });
      setModalMessage("Comment added successfully!");
      setIsModalOpen(true);
      setComment("");
      setUserName("");
      setRating(null);
    } catch (err) {
      console.error("Error adding comment", err);
      setModalMessage("Error adding comment");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className="comment-form">
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
          <h4 style={{ margin: '0', marginBottom: '5px' }}>Rating:</h4>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={30}
              color={i < rating ? "#ffc107" : "#e4e5e9"}
              onClick={() => setRating(i + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <strong>{modalMessage}</strong>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentForm;
