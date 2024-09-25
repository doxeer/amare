import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUnapprovedComments = async () => {
      const token = localStorage.getItem('adminToken');
      try {
        const response = await axios.get('http://localhost:5000/api/admin/comments', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setComments(response.data);
      } catch (err) {
        console.error('Error fetching unapproved comments:', err);
      }
    };

    fetchUnapprovedComments();
  }, []);

  const handleApproval = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.post(`http://localhost:5000/api/admin/comments/${id}/approve`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      console.error('Error approving comment:', err);
    }
  };

  const handleReject = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/admin/comments/${id}/reject`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      console.error('Error rejecting comment:', err);
    }
  };

  return (
    <div>
      <h2>Admin Panel - Pending Comments</h2>
      <ul>
        {comments.length === 0 ? (
          <p>No unapproved comments found.</p>
        ) : (
          comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.user_name}</strong>: {comment.comment}
              <div>
                <button onClick={() => handleApproval(comment.id)}>Approve</button>
                <button onClick={() => handleReject(comment.id)}>Reject</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminPanel;
