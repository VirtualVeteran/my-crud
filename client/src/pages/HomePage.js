import React from 'react';
import '../css/HomePage.css';
import Button from '@mui/material/Button';
import { Link as MuiLink } from '@mui/material';

const HomePage = () => (
  <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
    <header>
      <nav>
      <a href="/" className="kawaii-button">Home</a>
      <a href="/login" className="kawaii-button">Login</a>
      <a href="/inventory" className="kawaii-button">Inventory</a>
      <a href="/create-account" className="kawaii-button">Create Account</a>
      </nav>
    </header>
    <h1>Welcome to the Kawaii Store</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {/* Render items here */}
      <div className="item-card">
        <h3>Item Name</h3>
        <p>Item description... <a href="/item/:id">View More</a></p>
        <p>Quantity: 10</p>
      </div>
    </div>
  </div>
);

export default HomePage;