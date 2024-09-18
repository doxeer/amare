import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });
      if (response.status === 200) {
        // Giriş başarılı
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('adminPassword', password);
        localStorage.setItem('adminToken', 'dummy_token'); // Gerçek token kullanılması gerekebilir
        onLoginSuccess(); // Giriş başarılıysa bu işlev çağrılır
        navigate('/admin');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
