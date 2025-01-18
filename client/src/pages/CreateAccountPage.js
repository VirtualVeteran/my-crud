import React, { useState } from 'react';
import axios from 'axios';
import '../css/CreateAccount.css';

const CreateAccountPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        firstName,
        lastName,
      });
      console.log(response.data);
      // Redirect to login page or display success message
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
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
          width: '100%',
          maxWidth: '400px', // Adjust the max width as needed
        }}
        onSubmit={handleSubmit}
      >
        <h1>Create Account</h1>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className='kawaii-button' type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
