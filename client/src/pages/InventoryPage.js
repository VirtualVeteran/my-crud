import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/InventoryPage.css';

const InventoryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your server
    const fetchItems = async () => {
      const response = await fetch('http://localhost:5000/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div className="inventory-container">
      <h2>Inventory</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description.slice(0, 100)}...</p>
            <p>Price: ${item.price}</p>
            <Link to={`/item/${item.id}`} className="view-item">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
