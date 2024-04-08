// components/CarModal.js
import React from 'react';


const CarModal = ({ car, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{car.name}</h2>
        <p>{car.description}</p>
        <p className='py-1 px-12 my-3 mx-6'><img src={car.image} alt={car.name} /></p>
       <button className='my-3 mx-6 py-3 px-3 rounded-md' href={'/Payment'} style={{ backgroundColor: '#1135', color: '#fff', }} >Payment</button>
        <button className='my-3 mx-6 py-3 px-3 rounded-md' style={{ backgroundColor: '#1135', color: '#fff', }} onClick={closeModal}>Close</button>
       </div>

      </div>
  );
};

export default CarModal; 
