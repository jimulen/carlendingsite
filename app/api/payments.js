// pages/api/payments.js
import Payment from '../../models/paymentModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, description } = req.body;
      
      // Create a new payment using the Payment model
      const payment = new Payment({
        amount,
        currency,
        description,
      });

      // Save the payment to the database
      await payment.save();

      res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
      console.error('Error creating payment:', error);
      res.status(500).json({ message: 'Failed to create payment' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
