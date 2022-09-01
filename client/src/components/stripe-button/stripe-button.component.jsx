import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import React from "react";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishabelKey = process.env.STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((err) => {
        console.log("Payment Error ", JSON.parse(err));
        alert(
          "There was an issue with your payment. Please make sure to use the given Card details"
        );
      });
  };

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
  );
}

export default StripeCheckoutButton;
