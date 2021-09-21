import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Button, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./ProductCart.css";

const ProductCart = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [cartProduct, setCartProduct] = useState({});
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
  const handleOrderProduct = () => {
    const orderedProduct = {
      quantity: count,
      ...cartProduct,
      ...loggedInuser,
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
                  onBlur={handleOnBlurQuantity}
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
            <Link
              onClick={handleOrderProduct}
              className="order-placement-btn"
              to="#"
            >
              Order Placement
            </Link>
          </Col>
          {/* <Col sm>sm=true</Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCart;
