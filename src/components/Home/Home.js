import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="nav-menu">
      <Banner></Banner>
      {/* <hr></hr> */}
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
