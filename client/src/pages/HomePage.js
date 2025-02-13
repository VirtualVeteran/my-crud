import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';

const HomePage = () => {
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

  return (
    <div>
      <header>
        <h1>🥛🍓 Welcome to StrawberryMilk Inventory🍓🥛</h1>
        <div className="button-container">
          <a href="/" className="kawaii-button">Home</a>
          <a href="/login" className="kawaii-button">Login</a>
          <a href="/create-account" className="kawaii-button">Create Account</a>
          <a href="/developer" className="kawaii-button">Meet The Developer</a>
        </div>
      </header>

      {loading ? (
        <p>Loading items...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>{truncate(item.description, 100)}</p>
            {/* View Item button */}
            <div className="view-item-button-container">
              <a href={`/item/${item.id}`} className="kawaii-button">View Item</a>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default HomePage;
