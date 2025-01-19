import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'; // Material-UI icon

const UserBanner = ({ userName }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#F8BBD0',
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <Box display="flex" alignItems="center">
        {/* Kawaii User Avatar with cute smiley icon */}
        <Avatar sx={{ bgcolor: '#FF4081', marginRight: '16px' }}>
          <SentimentSatisfiedAltIcon style={{ color: '#fff', fontSize: '20px' }} />
        </Avatar>

        {/* User name and welcome text */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontFamily: 'Comic Sans MS, cursive',
            }}
          >
            Welcome back, {userName}!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              fontFamily: 'Comic Sans MS, cursive',
            }}
          >
            Let's manage your inventory with some cute vibes!
          </Typography>
        </Box>
      </Box>
      <div className="button-container">
          <a href="/" className="kawaii-button">Home</a>
          <a href="/" className="kawaii-button">Logout</a>
          <a href="/inventory" className="kawaii-button">Site Inventory</a>
        </div>
    </Box>
  );
};

export default UserBanner;
