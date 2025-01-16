import React from 'react';
import '../css/HomePage.css';
import Button from '@mui/material/Button';
import { Link as MuiLink } from '@mui/material';

const HomePage = () => (
  <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
    <header>
      <nav>
        <MuiLink href="/" underline="none">
          <Button variant="contained" color="primary">Home</Button>
        </MuiLink>
        <MuiLink href="/login" underline="none">
          <Button variant="contained" color="primary">Login</Button>
        </MuiLink>
        <MuiLink href="/inventory" underline="none">
          <Button variant="contained" color="primary">Inventory</Button>
        </MuiLink>
        <MuiLink href="/createAccount" underline="none">
          <Button variant="contained" color="primary">Create Account</Button>
        </MuiLink>
      </nav>
    </header>
    <h1>Welcome to the Inventory Manager!</h1>
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