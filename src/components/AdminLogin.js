import React, { useState } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar'; // Update the path as needed


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/admin/login', { username, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <NavigationBar /> {/* Add the navigation bar here */}
      <div className="container mt-5">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
