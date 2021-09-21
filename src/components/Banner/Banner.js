import React from "react";
import { Carousel, Button, Form, FormControl } from "react-bootstrap";
import "./Banner.css";
import banner01 from "../../image/Banner01.jpg";
import banner02 from "../../image/banner02.jpg";
import banner03 from "../../image/banner03.jpg";
const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner01} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 search-item"
                aria-label="Search"
              />
              <Button className="search-item">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner02} alt="Second slide" />

          <Carousel.Caption className="carousel-caption">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 search-item"
                aria-label="Search"
              />
              <Button className="search-item">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner03} alt="Third slide" />

          <Carousel.Caption className="carousel-caption">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 search-item"
                aria-label="Search"
              />
              <Button className="search-item">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
