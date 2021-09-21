import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import NavMenu from "./NavMenu/NavMenu";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin";
import ProductCart from "./components/ProductCart/ProductCart";
import Orders from "./components/Orders/Orders";

export const userContext = createContext();

function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/product/:productId">
            <ProductCart></ProductCart>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
