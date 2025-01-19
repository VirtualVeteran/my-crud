import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../css/AddItemPage.css'; // Assuming you have a separate CSS file for your styles

const AddItemPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const userId = Cookies.get('userId');
  const navigate = useNavigate();

  const handleAddItem = async (event) => {
    event.preventDefault();
    setError('');

    if (!userId) {
      setError('User not logged in.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId, // Associate the item with the logged-in user
          name,
          description,
          price,
          image_url: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      navigate('/user-inventory'); // Redirect back to the inventory page
    } catch (err) {
      console.error(err);
      setError('Something went wrong while adding the item.');
    }
  };

  return (
    <form onSubmit={handleAddItem}>
  <div>
    <label>Name:</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>
  <div>
    <label>Description:</label>
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
  </div>
  <div>
    <label>Price:</label>
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      required
    />
  </div>
  <div>
    <label>Image URL:</label>
    <input
      type="text"
      value={imageUrl}
      onChange={(e) => setImageUrl(e.target.value)}
    />
  </div>
  <button className="kawaii-button" type="submit">Add Item</button>
  <button className="kawaii-button" type="button" onClick={() => navigate('/user-inventory')}>Cancel</button>
</form>

  );
};

export default AddItemPage;
