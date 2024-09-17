import axios from 'axios';
import { useState } from 'react';

const CommentForm = ({ productId }) => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/comments', {
        productId,
        comment,
        user_name: userName
      });
      alert('Comment added successfully');
      setComment('');
      setUserName('');
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
