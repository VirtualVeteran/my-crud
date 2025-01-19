import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie to read from cookies

const UserInventory = () => {
  const [items, setItems] = useState([]); // Track items, not inventory
  const [error, setError] = useState('');
  const userId = Cookies.get('userId'); // Get userId from cookies

  useEffect(() => {
    const fetchUserInventory = async () => {
        if (!userId) {
          setError('User not logged in.');
          return;
        }
      
        try {
          console.log(`Fetching items for user: ${userId}`);
          const response = await fetch(`http://localhost:5000/user/${userId}`);
      
          if (!response.ok) {
            throw new Error('Failed to fetch inventory');
          }
      
          const data = await response.json();
          console.log('Fetched data:', data); // Debugging the data
          setItems(data); // Set the fetched items as inventory
        } catch (err) {
          console.error('Error fetching user inventory:', err);
          setError('Something went wrong while fetching the inventory.');
        }
      };
      
    fetchUserInventory();
  }, [userId]); // Refetch inventory if userId changes (e.g., login/logout)

  return (
    <div>
      <h2>Your Inventory</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              {item.image_url && <img src={item.image_url} alt={item.name} style={{ width: '100px', height: '100px' }} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found in your inventory.</p>
      )}
    </div>
  );
};

export default UserInventory;
