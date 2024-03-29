// components/CarGrid.js
"use client";
import React, { useState } from 'react';
import CarModal from './CarModal'; // Create a CarModal component for the modal content


const CarGrid = () => {
  // Array of cars with name, image, price, and description
  const cars = [
    { name: 'Car 1', image: '/car1.png', price: '$30,000', description: 'modern luxury car, good for african condition, high capacity and accuracy' },
    { name: 'Car 2', image: '/car2.png', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 3', image: '/car3.jpg', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 4', image: '/car4.jpg', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 5', image: '/car5.jpg', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 6', image: '/car6.jpg', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 7', image: '/car7.jpg', price: '$25,000', description: 'Description for Car 2' },
    { name: 'Car 8', image: '/car8.jpg', price: '$25,000', description: 'Description for Car 2' },
    // Add more cars as needed
  ];

  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="car-grid">
      {cars.map((car, index) => (
        <div key={index} className="car-item">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.price}</p>
          <button style={{ backgroundColor: '#3498db', color: 'red', }} onClick={() => openModal(car)}>View Details</button>
        </div>
      ))}

      {selectedCar && (
        <CarModal
          car={selectedCar}
          closeModal={closeModal}
        />
      )}
      
    </div>
  );
};

export default CarGrid;
