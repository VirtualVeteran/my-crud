import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LoginPage.css';



const LoginPage = () => (
  <div
  style={{
    backgroundImage: `url('/assets/background.jpg')`, // Use the correct path to your image
    backgroundSize: 'cover', // Ensure the image covers the entire container
    backgroundRepeat: 'no-repeat', // Prevent the image from tiling
    backgroundPosition: 'center', // Center the image
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <form
      style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '10px',
      }}
    >
      <h2>Login to Your Account</h2>
      <input
        type="email"
        placeholder="Email"
        required
        style={{
          marginBottom: '1rem',
          padding: '0.5rem',
          width: '100%',
        }}
      />
      <input
        type="password"
        placeholder="Password"
        required
        style={{
          marginBottom: '1rem',
          padding: '0.5rem',
          width: '100%',
        }}
      />
      {/* Updated button */}
      <button type="submit" className="kawaii-button">
        Login
      </button>
      <p style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <Link
          to="/create-account"
          style={{ textDecoration: 'none', color: '#77C9E2' }}
        >
          Sign up
        </Link>
      </p>
    </form>
  </div>
);

export default LoginPage;
