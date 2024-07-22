import React, { useEffect, useState, useContext } from 'react';
import ShopContext from "../context/ShopContext";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [order, setOrder] = useState(null);
  const { total } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (total > 0) {
      initiatePaymentProcess();
    }
  }, [total]);

  const loadRazorpayScript = () => {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createOrder = async () => {
    const res = await fetch('https://urban-bazzar-backend.onrender.com/api/placeorder/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: total }) // Use the total amount from ShopContext
    });
    const data = await res.json();
    setOrder(data);
    return data;
  };

  const initiatePaymentProcess = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Failed to load Razorpay SDK. Check your internet connection.');
      return;
    }

    const order = await createOrder();

    const options = {
      "key": "rzp_test_0TxJvcYoqkIIIF",
      "amount": order.amount,
      "currency": order.currency,
      "name": "Urban Bazzar",
      "description": "Test Transaction",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLocaOjjxbHBH6afQHRi9Rqk99FCNCRqB2xg&s",
      "order_id": order.id,
      "handler": function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        navigate('/gallery');
        
      },
      "prefill": {
        "name": "vinay Prakash",
        "email": "prakashvinayiiitk@gmail.com",
        "contact": "7733842416"
      },
      "notes": {
        "address": "Urban Bazzar"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h5>Processing your payment...</h5>
    </div>
  );
};

export default Payment;
