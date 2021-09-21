import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { userContext } from "../../App";
import OrderedInfo from "./OrderedInfo";
import "./Order.css";

const Orders = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [orderedInfo, setOrderedInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ordered?email=" + loggedInuser.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderedInfo(data));
  }, []);
  console.log(orderedInfo);
  return (
    <Container>
      <h5 className="ordered-list-title">
        {loggedInuser.name}, Your Ordered List
      </h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderedInfo.map((ori) => (
            <OrderedInfo key={ori._id} orderInfo={ori}></OrderedInfo>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
