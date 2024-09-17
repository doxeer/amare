import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ productId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/comments/${productId}`);
        setComments(response.data);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };

    fetchComments();
  }, [productId]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user_name}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
