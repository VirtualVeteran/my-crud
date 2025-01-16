import React from 'react';

const InventoryPage = () => (
  <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
    <header>
    <h1>Your Inventory</h1>
    <div className='button-container'>
      <a href="/" className="kawaii-button">Home</a>
      <a href="/add-item" className="kawaii-button">Add Item</a>
      <a href="/logout" className="kawaii-button">logout</a>
      </div>
    </header>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {/* Render items here */}
      <div className="item-card">
        <h3>Item Name</h3>
        <p>Item description... <a href="/item/:id">View More</a></p>
        <p>Quantity: 10</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  </div>
);

export default InventoryPage;