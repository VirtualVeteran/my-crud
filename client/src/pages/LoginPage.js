import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';  // Import js-cookie
import { Link } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Save userId in cookies
        Cookies.set('userId', data.userId, { expires: 7, path: '' }); // expires in 7 days
      
        // Redirect to the user's specific inventory page
        navigate('/user-inventory');
      } else {
        setErrorMessage(data.error || 'Failed to log in');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Failed to connect to the server');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to Your Account</h2>
        {errorMessage && (
          <div className="error-message">
            <strong>{errorMessage}</strong>
          </div>
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="kawaii-button login-button">
          Login
        </button>
        <p className="sign-up-link">
          Don't have an account?{' '}
          <Link to="/create-account" className="sign-up-link-text">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
