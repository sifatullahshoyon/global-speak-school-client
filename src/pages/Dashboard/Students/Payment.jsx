import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
// import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    // const [cart] = useCart();
    // const total = cart.reduce((sum , item)=> sum + item.price,0);
    // const price = parseFloat(total.toFixed(2));

    const price = 60.70;

    
  return (
    <div>
      <p className="text-center font-bold text-lg md:text-xl lg:text-2xl pb-14">
        Please Process The Payment
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
