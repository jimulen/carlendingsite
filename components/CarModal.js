import React, { useState } from 'react';
import PaymentForm from './PaymentForm'; // Assuming PaymentForm.js is in the same directory

const CarModal = ({ car, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [description, setDescription] = useState('');

  const handlePayment = () => {
    setIsOpen(true);
  };

  const handleSubmitPayment = async () => {
    try {
      // Send a POST request to create a new payment
      await axios.post('/api/payments', { amount, currency, description });
      alert('Payment created successfully!');
      closeModal(); // Close the modal after successful payment
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Failed to create payment');
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{car.name}</h2>
        <p>{car.description}</p>
        <p className='py-1 px-12 my-3 mx-6'><img src={car.image} alt={car.name} /></p>
        <div className="buttons-container">
          <button className='my-3 mx-6 py-3 px-3 rounded-md' style={{ backgroundColor: '#1135', color: '#fff' }} onClick={handlePayment}>
            Payment
          </button>
          <button className='my-3 mx-6 py-3 px-3 rounded-md' style={{ backgroundColor: '#1135', color: '#fff' }} onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PaymentForm
              amount={amount}
              currency={currency}
              description={description}
              setAmount={setAmount}
              setCurrency={setCurrency}
              setDescription={setDescription}
              handleSubmit={handleSubmitPayment}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarModal;
