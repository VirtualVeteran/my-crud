import React, { useState } from 'react';

const EditItemPage = ({ match }) => {
  const { id } = match.params; // Get item ID from the route params.
  const [item, setItem] = useState({ name: '', description: '', quantity: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle updating the item here.
  };

  return (
    <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={item.name} 
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          placeholder="Item Name" 
        />
        <textarea
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          placeholder="Item Description"
        />
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          placeholder="Quantity"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditItemPage;