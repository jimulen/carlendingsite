import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/payments', { amount, currency, description });
      alert('Payment created successfully!');
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Failed to create payment');
    }
  };

  const handleClose = () => {
    onClose(); // Close the form
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="flex justify-md">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mr-5 ml-12"
          >
            Submit Payment
          </button>
          <button
            type="button"
            onClick={handleClose} // Call handleClose function when this button is clicked
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 ml-8"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
