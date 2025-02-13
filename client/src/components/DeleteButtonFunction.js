import React, { useState } from 'react';

const DeleteButtonFunction = ({ itemId, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false); // To toggle the dialog

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      onDelete(); // Refresh the inventory after successful deletion
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete the item. Please try again.');
    }
  };

  return (
    <div>
      {/* Trigger delete confirmation dialog */}
      <button
        onClick={() => setShowDialog(true)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'pink', // Dark pink background
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          fontSize: '16px', // Makes the "X" visible
          zIndex: 10,
        }}
      >
        X
      </button>

      {/* Delete confirmation dialog */}
      {showDialog && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <p>Hey Bestie! Are you sure you want to delete this item?</p>
            <button className='kawaii-button' onClick={handleDelete}>Yes</button>
            <button className='kawaii-button' onClick={() => setShowDialog(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButtonFunction;
