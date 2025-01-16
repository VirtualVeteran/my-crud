import React from 'react';

const ItemDetailPage = ({ match }) => {
  const { id } = match.params; // Get item ID from the route params.
  // Fetch item data based on the ID here.
  return (
    <div style={{ backgroundColor: '#A8D8FF', padding: '2rem' }}>
      <h1>Item Details</h1>
      <div>
        <h3>Item Name</h3>
        <p>Full description of the item...</p>
        <p>Quantity: 10</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ItemDetailPage;