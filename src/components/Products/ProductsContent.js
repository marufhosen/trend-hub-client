import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./ProductsContent.css";

const ProductsContent = (props) => {
  const { productName, productPrice, ImageUrl, _id } = props.productDetails;
  const history = useHistory();
  const handleBuyProducts = (productId) => {
    history.push(`/product/${productId}`);
  };
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" style={{ height: "60%" }} src={ImageUrl} />
      <Card.Body className="product-card-body">
        <Card.Title className="product-name">{productName}</Card.Title>
      </Card.Body>
      <p className="product-des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="product-price">{productPrice} $</p>
      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">
          <FontAwesomeIcon className="star-icon star-review" icon={faStar} />
          <FontAwesomeIcon className="star-icon star-review" icon={faStar} />
          <FontAwesomeIcon className="star-icon star-review" icon={faStar} />
          <FontAwesomeIcon className="star-icon" icon={faStar} />
          <FontAwesomeIcon className="star-icon" icon={faStar} />
        </div>
        <div className="p-2 col-example text-left">
          <Link
            to="#"
            onClick={() => handleBuyProducts(_id)}
            className="card-btn"
            variant="primary"
          >
            Buy now
            <span>
              <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductsContent;
