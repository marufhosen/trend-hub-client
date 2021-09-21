import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductsContent from "./ProductsContent";

const Products = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/newProducts")
      .then((res) => res.json())
      .then((data) => setAddedProducts(data));
  }, []);
  return (
    <div className="product-container">
      {addedProducts.map((pd) => (
        <ProductsContent key={pd._id} productDetails={pd}></ProductsContent>
      ))}
    </div>
  );
};

export default Products;

// {addedProducts.slice(0, 5).map((pd) => (
//   <ProductsContent key={pd._id} productDetails={pd}></ProductsContent>
// ))}
