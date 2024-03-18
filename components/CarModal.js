// components/CarModal.js
import React from 'react';


const CarModal = ({ car, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{car.name}</h2>
        <p>{car.description}</p>
        <button>Pay Now</button>
        <button style={{ backgroundColor: '#113536', color: '#fff', }} onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CarModal;
