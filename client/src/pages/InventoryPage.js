import React, { useState, useEffect } from 'react';
import '../css/InventoryPage.css';

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Inventory</h1>
      <div className="button-container">
        <button className="kawaii-button">Add Item</button>
        <button className="kawaii-button">Refresh</button>
      </div>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
              <p>{truncate(item.description, 100)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryPage;
