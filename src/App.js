import React from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./containers/Player";
import Game from "./containers/Game/Game.js";
import LoginPage from "./components/Login/LoginPage.js";
import Logout from "./components/Logout/Logout.js";
import MainNavbar from "./components/Navbar/MainNavbar.js";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Router>
      <Container fluid="true">
        {/* <MainNavbar /> */}
        <Route path="/" exact render={() => <LoginPage />} />
        {/* <Route path="/" exact render={() => <Game />} /> */}
        {/* <Route path="/create" render={() => <Player />} /> */}
        {/* <Route path="/login" render={() => <Login />} /> */}
        {/* <Route path="/logout" render={() => <Logout />} /> */}
      </Container>
    </Router>
  );
};

export default App;
