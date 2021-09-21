import React from "react";
import { Button } from "react-bootstrap";

const OrderedInfo = (props) => {
  const { productPrice, productName, quantity } = props.orderInfo;
  return (
    <tr>
      <td>{productName}</td>
      <td>{productPrice}</td>
      <td>{quantity}</td>
      <td>
        <Button size="sm">Order Cancel</Button>
      </td>
    </tr>
  );
};

export default OrderedInfo;
