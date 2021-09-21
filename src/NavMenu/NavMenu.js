import React, { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import "./NavMenu.css";

const NavMenu = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const hanglLogOut = () => {
    setLoggedInUser({});
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="nav-brand" to="/home">
              TrendHub<sub>An Ecomerce Platform</sub>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-item" to="/home">
                Home
              </Link>
              <Link className="nav-item" to="/orders">
                Orders
              </Link>
              <Link className="nav-item" to="/admin">
                Admin
              </Link>
              <Link className="nav-item" to="/profile">
                Profile
              </Link>
              <p className="logged-user-name">{loggedInuser.name}</p>
              {loggedInuser.success ? (
                <Link onClick={hanglLogOut} className="nav-item" to="/login">
                  <Button className="btn">Log out</Button>
                </Link>
              ) : (
                <Link className="nav-item" to="/login">
                  <Button className="btn">Log in</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
