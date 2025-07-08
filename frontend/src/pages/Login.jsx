import React, { useState } from 'react';
import '../styles/contactform.css';
import { FaTimes } from "react-icons/fa";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      if (onLoginSuccess) onLoginSuccess(data.user);
      else window.location.href = '/admin'; 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-overlay login-form-overlay">
      <div className="form-container login-form-container">
        <button className="close-button login-close-button" onClick={() => window.location.href = '/'}>
          <FaTimes className="close-icon login-close-icon" />
        </button>
        <h2 className="head login-head">Admin Login</h2>
        <p className="subtitle-form login-subtitle-form">Please enter your credentials</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="inputGroup login-input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              disabled={loading}
              className="login-input login-email-input"
            />
          </div>
          <div className="inputGroup login-input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              disabled={loading}
              className="login-input login-password-input"
            />
          </div>
          {error && <p className="error-message login-error-message">{error}</p>}
          <button type="submit" className="submit-button login-submit-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
