import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ItemDetailPage.css';

const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate
  const [item, setItem] = useState(null);

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
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      
      {/* Back button */}
      <button onClick={() => navigate('/')} className="back-button">
        Back to Inventory
      </button>
    </div>
  );
};

export default ItemDetailPage;
