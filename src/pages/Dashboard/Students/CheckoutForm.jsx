import { Button } from '@chakra-ui/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError , setCardError] = useState('');
    const token = localStorage.getItem("access-token");
    
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(price),
      authorization: `Bearer ${token}`,
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setCardError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setCardError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }else{
            console.log('paymentIntent', paymentIntent)
        }

      };

       

    //   useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(price),
    //       authorization: `Bearer ${token}`,
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, []);
    return (
        <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <Button colorScheme='blue' mt='5' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </Button>
        {/* <Button colorScheme='blue'>Blue</Button> */}
      </form>
      {cardError && <p className='text-rose-600 mt-3'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;