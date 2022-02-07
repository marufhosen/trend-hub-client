import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SplitForm from "./SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51KEERhG0sz58uFSJ9ilmUlJ2FWuEzRgqDMPgUD6pG7TdaInimZ1DTue3J0RnNQGACU4OZVu6ybRzjYdFdIWMscwq00lIBaNJ8U"
);

const PaymentModule = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
      {/* <SplitForm/> */}
    </Elements>
  );
};

export default PaymentModule;
