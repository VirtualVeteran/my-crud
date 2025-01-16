import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const LoginPage = () => (
  <div style={{ backgroundColor: '#A8D8FF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <form style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '10px' }}>
      <h2>Login to Your Account</h2>
      <input type="email" placeholder="Email" required style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }} />
      <input type="password" placeholder="Password" required style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }} />
      <Button variant="contained" color="primary">Login</Button>
      <p style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <Link to="/create-account" style={{ textDecoration: 'none', color: '#77C9E2' }}>
          Sign up
        </Link>
      </p>
    </form>
  </div>
);

export default LoginPage;