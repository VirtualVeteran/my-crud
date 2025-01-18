import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the server on component mount
    axios.get('/api/items') // Assuming the Express server has this endpoint
      .then(response => {
        setItems(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
      <header>
        <h1>Your Inventory</h1>
        <div className='button-container'>
          <a href="/" className="kawaii-button">Home</a>
          <a href="/add-item" className="kawaii-button">Add Item</a>
          <a href="/logout" className="kawaii-button">Logout</a>
        </div>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {/* Render items dynamically */}
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description} <a href={`/item/${item.id}`}>View More</a></p>
            <p>Quantity: {item.quantity}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
