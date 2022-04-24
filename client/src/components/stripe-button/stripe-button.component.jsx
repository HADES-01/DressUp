import StripeCheckout from "react-stripe-checkout";

import React from 'react'

const onToken = token => {
  console.log(token)
  alert("Payment Succesful");
}

function StripeCheckoutButton({price}) {
  const priceForStripe = price * 100;
  const publishabelKey = 'pk_test_8GCYZA0jUM7zXT8oJf6ZqWjU00aK3902cH';
  return (
    <StripeCheckout 
      label="Pay Now"
      name="DressUp Co."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishabelKey}
    />
  )
}

export default StripeCheckoutButton;
