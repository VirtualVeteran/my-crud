import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/CreateAccount.css';

const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

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

      // Redirect to the user inventory page after successful registration
      navigate('/user-inventory');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(../assets/background.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          background: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '50px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Cloud Pseudo-elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-30px',
            left: '-30px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#FFB6C1',
            zIndex: -1,
          }}
        ></Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            backgroundColor: '#FFB6C1',
            zIndex: -1,
          }}
        ></Box>

        <Typography
          variant="h4"
          sx={{
            color: '#FF91AF',
            fontFamily: 'Bubblegum Sans, cursive',
            marginBottom: '1.5rem',
          }}
        >
          Create Account
        </Typography>

        {error && <p style={{ color: 'red' }}>{error}</p>}

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
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
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
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
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
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
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
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
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
              borderRadius: '12px',
              fontFamily: 'Bubblegum Sans, cursive',
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
