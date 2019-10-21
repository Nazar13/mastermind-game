import React from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Player from "./containers/Player";
import LoginPage from "./components/Login/LoginPage";
import Container from "react-bootstrap/Container";
import Dashboard from "./components/Dashboard/Dashboard.js";

const App = () => {
  // localStorage.setItem("loggedIn", false);
  // let loggedIn = localStorage.getItem("loggedIn");
  // console.log(typeof loggedIn);
  let loggedIn = false;
  return (
    <Router>
      <Container fluid="true">
        <Route exact path="/">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </Container>
    </Router>
  );
};

export default App;
