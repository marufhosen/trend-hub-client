import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Button, Image, Row, Form } from "react-bootstrap";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import { userContext } from "../../App";
import PaymentModule from "../PaymentModule/PaymentModule";
import "./ProductCart.css";

const ProductCart = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [cartProduct, setCartProduct] = useState({});
  const [shipInfo, setShipInfo] = useState({});
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  useEffect(() => {
    fetch("https://trend-hub-server.herokuapp.com/product/" + productId)
      .then((res) => res.json())
      .then((data) => setCartProduct(data));
  }, [productId]);
  const handleQuantityDecrease = () => {
    count > 1 && setCount(count - 1);
  };
  const handleQuantityIncrease = () => {
    setCount(count + 1);
  };
  const handleOnBlurQuantity = (e) => {
    // console.log(e.target.value);
  };
  delete cartProduct["_id"];

  const handleShipingInfo = (e) => {
    const shipInformation = { ...shipInfo };
    shipInformation[e.target.name] = e.target.value;
    setShipInfo(shipInformation);
  };

  const handleOrderProduct = () => {
    const orderedProduct = {
      quantity: count,
      ...cartProduct,
      ...shipInfo,
    };
    // console.log(orderedProduct);
    const url = "https://trend-hub-server.herokuapp.com/orderedProducts";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderedProduct),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
  return (
    <div className="cart-container">
      <Container>
        <Row>
          <Col sm>
            <Image src={cartProduct.ImageUrl} width="70%" rounded />
          </Col>
          <Col sm>
            <h5>{cartProduct.productName}</h5>
            <div>
              <span className="quantity-input">
                <button onClick={handleQuantityDecrease} className="quantity">
                  -
                </button>
                <input
                  className="quantity-display"
                  onChange={handleOnBlurQuantity}
                  name="quantity"
                  type="text"
                  value={count}
                />
                <button onClick={handleQuantityIncrease} className="quantity">
                  +
                </button>
              </span>
              <p className="pd-price">
                Price: {cartProduct.productPrice * count} $
              </p>
            </div>
          </Col>
          {/* <Col sm>sm=true</Col> */}
        </Row>
        <div style={{ width: "100%", textAlign: "center", padding: "30px 0 0 0" }}>
          <PaymentModule></PaymentModule>
        </div>
        <div className="w-50 m-auto pb-5">
          <h3 className="text-center">Shipping Information</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="billingName"
                type="text"
                placeholder="Enter Name"
                value={loggedInuser.name}
                onBlur={handleShipingInfo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="billingEmail"
                type="email"
                placeholder="Enter email"
                value={loggedInuser.email}
                onBlur={handleShipingInfo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Shiping Address</Form.Label>
              <Form.Control
                name="billingAdd"
                type="text"
                placeholder="Address"
                onBlur={handleShipingInfo}
              />
            </Form.Group>
            <Button
              onClick={handleOrderProduct}
              className="order-placement-btn"
            >
              Order Placement
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ProductCart;
