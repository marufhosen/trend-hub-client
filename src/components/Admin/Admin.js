import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Button,
  Table,
} from "react-bootstrap";
import "./Admin.css";
import ManageProducts from "./ManageProducts";

const Admin = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [newProduct, setNewProduct] = useState({});
  const [manageProduct, setManageProduct] = useState([]);

  //uplode image in imageBB server

  const handleImgUplode = (event) => {
    const imageData = new FormData();
    imageData.set("key", "0d06443c1e3c2409ef83bc2824a5be1e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //handle added product name

  const handleOnBlur = (e) => {
    const addNewProduct = { ...newProduct };
    addNewProduct[e.target.name] = e.target.value;
    setNewProduct(addNewProduct);
  };

  //handle new product post

  const handleOnSubmit = (data) => {
    const productData = { ImageUrl: imgUrl, ...newProduct };
    const url = "http://localhost:5000/addProducts";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
    data.preventDefault();
  };

  //handle view products for manages
  useEffect(() => {
    fetch("http://localhost:5000/newProducts")
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, []);

  return (
    <Container>
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col sm={3} className="admin-nav">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="admin-nav-item" eventKey="first">
                  Add Product
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="admin-nav-item" eventKey="second">
                  Manage Products
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="admin-nav-item" eventKey="third">
                  Edit Product
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <Form onSubmit={handleOnSubmit}>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      className="data-input"
                      type="text"
                      name="productName"
                      onBlur={handleOnBlur}
                      placeholder="Enter Product Name"
                    />
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                      className="data-input"
                      type="text"
                      name="productPrice"
                      onBlur={handleOnBlur}
                      placeholder="Enter Price"
                    />
                    <Form.Label>Add Image</Form.Label>
                    <Form.Control
                      className="data-input"
                      onChange={handleImgUplode}
                      type="file"
                    />
                    <Button type="submit" className="add-prdct-btn">
                      SUBMIT
                    </Button>
                  </Form>
                </div>
                <div></div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manageProduct.map((mnp) => (
                      <ManageProducts key={mnp._id} managePro={mnp}></ManageProducts>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="third">Edit Product</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Admin;
