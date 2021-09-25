import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Products.css";
import ProductsContent from "./ProductsContent";

const Products = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://trend-hub-server.herokuapp.com/newProducts")
      .then((res) => res.json())
      .then((data) => {
        setAddedProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && (
        <div className="spinner-container">
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      <div className="product-container">
        {addedProducts.map((pd) => (
          <ProductsContent key={pd._id} productDetails={pd}></ProductsContent>
        ))}
      </div>
    </div>
  );
};

export default Products;

// {addedProducts.slice(0, 5).map((pd) => (
//   <ProductsContent key={pd._id} productDetails={pd}></ProductsContent>
// ))}
