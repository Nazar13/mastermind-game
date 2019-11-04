import React from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage.js";
import Container from "react-bootstrap/Container";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

const App = () => {
  return (
    <Router>
      <Container fluid="true">
        <Switch> 
          <Route path="/" exact render={() => <LoginPage />} />
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
