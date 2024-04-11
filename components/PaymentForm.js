// PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios using npm or yarn

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server to create a new payment
      await axios.post('/api/payments', { amount, currency, description });
      alert('Payment created successfully!');
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Failed to create payment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
        Currency:
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button className='bg-green-600 mt-2 px-2 rounded-md' type="submit" style={{ backgroundColor: '#green', color: '#fff' }}>Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
