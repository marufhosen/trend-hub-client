import React from "react";
import { Button } from "react-bootstrap";

const ManageProducts = (props) => {
  const { productName, productPrice } = props.managePro;
  return (
    <tr>
      <td>{productName}</td>
      <td>{productPrice}</td>
      <td>
        <Button size="sm">Delete</Button>
      </td>
    </tr>
  );
};

export default ManageProducts;
