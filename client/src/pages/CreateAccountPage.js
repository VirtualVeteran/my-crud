// src/CreateAccountPage.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';  // Import js-cookie
import '../css/CreateAccount.css';

const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.json();
      console.log('Registration successful', result);

      // Check if the response contains user information
      if (result.user && result.user.id) {
        // Save userId in cookies for 7 days
        Cookies.set('userId', result.user.id, { expires: 7, path: '/' });
        
        // Redirect to the user's inventory page
        navigate('/user-inventory');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Box
      sx={{
       
      }}
    >
      <Box
        sx={{
      
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#FF91AF',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          Create Account
        </Typography>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              sx={{
                backgroundColor: '#FFEBEE',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              sx={{
                backgroundColor: '#FFEBEE',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                backgroundColor: '#FFEBEE',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Box sx={{ marginBottom: '1.5rem' }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                backgroundColor: '#FFEBEE',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#FF91AF',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#FFB6C1',
              },
            }}
          >
            Create Account
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default CreateAccountPage;
