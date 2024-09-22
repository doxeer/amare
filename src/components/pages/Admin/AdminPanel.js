import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [comments, setComments] = useState([]);
  const adminUsername = localStorage.getItem('adminUsername');
  const adminPassword = localStorage.getItem('adminPassword');

  useEffect(() => {
    const fetchUnapprovedComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/comments', {
          headers: {
            'Authorization': `Basic ${btoa(`${adminUsername}:${adminPassword}`)}` // `Basic` şemasıyla birlikte base64 encoding
          }
        });
        setComments(response.data);
      } catch (err) {
        console.error('Error fetching unapproved comments:', err);
      }
    };

    fetchUnapprovedComments();
  },);

  const handleApproval = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/comments/${id}/approve`, {}, {
        headers: {
          'Authorization': `Basic ${btoa(`${adminUsername}:${adminPassword}`)}`
        }
      });
      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      console.error('Error updating comment status:', err);
    }
  };
 

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/comments/${id}/reject`, {}, {
        headers: {
          'Authorization': `Basic ${btoa(`${adminUsername}:${adminPassword}`)}`
        }
      });
      setComments(comments.filter(comment => comment.id !== id));
    } catch (err) {
      console.error('Error deleting comment:', err);
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
