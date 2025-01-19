import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ItemDetailPage.css';
import Cookies from 'js-cookie';

const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate
  const [item, setItem] = useState(null);
  const userId = Cookies.get('userId');

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:5000/items/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="item-detail-container">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      
      {/* Back button */}
      <button 
  onClick={() => {
    if (userId) {
      // Redirect logged-in users back to their inventory page
      navigate('/user-inventory');
    } else {
      // Redirect visitors to the homepage
      navigate('/');
    }
  }} 
  className="back-button"
>
  Back to Inventory
</button>
    </div>
  );
};

export default ItemDetailPage;
