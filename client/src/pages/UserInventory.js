import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for routing
import DeleteButtonFunction from '../components/DeleteButtonFunction'; // Import the delete button function
import UserBanner from '../components/UserBanner';
import '../css/UserInventoryPage.css';

const UserInventory = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [editingItemId, setEditingItemId] = useState(null); // Tracks the item being edited
  const [editedItem, setEditedItem] = useState({}); // Tracks changes made to the item
  const userId = Cookies.get('userId'); // Get userId from cookies
  const navigate = useNavigate(); // Initialize navigate
  const userName = Cookies.get('userName');

  useEffect(() => {
    const fetchUserInventory = async () => {
      if (!userId) {
        setError('User not logged in.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch inventory');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError('Something went wrong while fetching the inventory.');
      }
    };

    fetchUserInventory();
  }, [userId]);

  const handleEditClick = (item) => {
    setEditingItemId(item.id); // Set the current item to edit
    setEditedItem(item); // Populate the edited item fields
  };

  const handleInputChange = (field, value) => {
    setEditedItem((prev) => ({ ...prev, [field]: value })); // Update the edited item fields
  };

  const handleSaveClick = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedItem),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedItem = await response.json();
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
      setEditingItemId(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating item:', error);
      setError('Failed to update item.');
    }
  };

  return (
    <div>
      <UserBanner userName={userName} />
      <h2>Your Inventory</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Add Item Button */}
      <button onClick={() => navigate('/add-item')} className="kawaii-button">
        Add New Item
      </button>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item-card" style={{ position: 'relative' }}>
              {editingItemId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editedItem.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  <input
                    type="text"
                    value={editedItem.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                  <button onClick={() => handleSaveClick(item.id)} className="kawaii-button">
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => handleEditClick(item)} className="kawaii-button">
                    Edit
                  </button>
                </>
              )}
              {/* Delete button */}
              <DeleteButtonFunction itemId={item.id} onDelete={() => setItems(items.filter((i) => i.id !== item.id))} />
              {/* View Item Link */}
              <Link to={`/item/${item.id}`} className="kawaii-button">
                View Item
              </Link>
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
