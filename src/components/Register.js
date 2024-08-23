import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [activeForm, setActiveForm] = useState('register'); // State to manage active form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/register', { username, email, password });
      setActiveForm('login'); // Switch to login form after registration
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/admin/login', { username, password });
  
      // Handle token response, which may now be managed on the server side
      alert('Admin login successful!');
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  

  const handleNavClick = (formType) => {
    setActiveForm(formType);
    setError('');
  };

  return (
    <div>
      {/* Inbuilt NavigationBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Home</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavClick('register')}>Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavClick('login')}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavClick('admin')}>Admin Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: '400px' }}>
          {activeForm === 'register' && (
            <>
              <h2 className="card-title mb-4">Register</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              {/* <p className="mt-3 text-center">
                Already have an account? 
                <button type="button" className="btn btn-link" onClick={() => handleNavClick('login')}>Login</button>
              </p> */}
            </>
          )}
          {activeForm === 'login' && (
            <>
              <h2 className="card-title mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              {/* <p className="mt-3 text-center">
                Don't have an account? 
                <button type="button" className="btn btn-link" onClick={() => handleNavClick('register')}>Register</button>
              </p> */}
            </>
          )}
          {activeForm === 'admin' && (
            <>
              <h2 className="card-title mb-4">Admin Login</h2>
              <form onSubmit={handleAdminLogin}>
                <div className="mb-3">
                  <label htmlFor="adminUsername" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminUsername"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="adminPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
