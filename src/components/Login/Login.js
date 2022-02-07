import React, { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import "./Login.css";
import {
  createedUsers,
  initFirebase,
  signInUsers,
  storeAuthToken,
} from "./LoginManeger";

initFirebase();

const Login = () => {
  const [createUser, setCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({});

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loggedInuser, setLoggedInUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleOnBlur = (e) => {
    let validInput = true;
    if (e.target.name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      if (emailValid) {
        validInput = true;
      } else {
        setEmailError(true);
      }
    }
    if (e.target.name === "password") {
      const passValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(
        e.target.value
      );
      if (passValid) {
        validInput = true;
      } else {
        setPasswordError(true);
      }
    }
    if (validInput) {
      const validUsers = { ...newUser };
      validUsers[e.target.name] = e.target.value;
      setNewUser(validUsers);
    }
  };
  const handleOnSubmit = (e) => {
    if (createUser && newUser.email && newUser.password) {
      createedUsers(newUser.email, newUser.password, newUser.name).then(
        (res) => {
          setLoggedInUser(res);
        }
      );
    }
    if (!createUser && newUser.email && newUser.password) {
      signInUsers(newUser.email, newUser.password).then((res) => {
        setLoggedInUser(res);
        storeAuthToken();
        history.replace(from);
      });
    }
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <Container>
        <div className="input-form">
          <div className="login-form-title">
            <h2>Trend Hub</h2>
            <h4>{createUser ? "Sign up" : "Sign in"}</h4>
          </div>
          <Form onSubmit={handleOnSubmit}>
            {createUser && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onBlur={handleOnBlur}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onBlur={handleOnBlur}
                type="text"
                name="email"
                placeholder="Enter Email"
                required
              />
              {emailError && (
                <p style={{ color: "red" }}>Enter valid email address</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={handleOnBlur}
                type="password"
                name="password"
                placeholder="Password"
              />
              {passwordError && (
                <p style={{ color: "red" }}>
                  Password atleast 1 uppercase, 1 lowercase letter and 1 number
                </p>
              )}
            </Form.Group>
            <Button
              className="search-item login-btn"
              variant="primary"
              type="submit"
            >
              {createUser ? "Sign up" : "Sign in"}
            </Button>
          </Form>
          {loggedInuser.loginSuccess && (
            <p style={{ color: "green" }}>Successfully login</p>
          )}
          <p className="create-new">
            {createUser ? "Have an account?" : "Don't have an account?"}
            <span
              onClick={() => setCreateUser(!createUser)}
              className="sign-in"
            >
              {createUser ? "Login" : "Create an account"}
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
