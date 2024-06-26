// paymentModel.js

import { Schema, model } from 'mongoose';

// Define the schema for the payment model
const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the payment model based on the schema
const Payment = model('Payment', paymentSchema);

// Export the payment model
export default Payment;
