import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa";

const CommentList = ({ productId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/comments/${productId}`);
        setComments(response.data.filter(comment => comment.approved === 1)); // Sadece onaylanmış yorumları filtrele
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };

    fetchComments();
  }, [productId]);

  return (
    <div>
      <h2 style={{margin:'0'}}>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user_name}</strong>: {comment.comment}
            <div>
              {/* Yıldızların gösterilmesi */}
              {[...Array(comment.rating || 0)].map((_, i) => (
                <FaStar key={i} color="#ffc107" />
              ))}
              {[...Array(5 - (comment.rating || 0))].map((_, i) => (
                <FaStar key={i} color="#e4e5e9" />
              ))}
            </div>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default CommentList;
