import { useState } from 'react';
import { PaystackButton } from 'react-paystack';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('paystack');

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: 'customer@email.com',
    amount: 500000, // in kobo (5000 NGN)
    publicKey: 'YOUR_PUBLIC_KEY'
  };

  const handleCOD = () => {
    alert('Order placed with Cash on Delivery!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <select onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="paystack">Pay with Paystack</option>
        <option value="cod">Cash on Delivery</option>
      </select>

      {paymentMethod === 'paystack' ? (
        <PaystackButton {...paystackConfig} />
      ) : (
        <button onClick={handleCOD}>Place Order (COD)</button>
      )}
    </div>
  );
}
