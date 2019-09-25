import React from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./containers/Player";
import Game from "./containers/Game/Game.js";
import MainNavbar from "./components/Navbar/MainNavbar.js";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Router>
      <Container fluid="true">
        <MainNavbar />
        <Route path="/" exact render={() => <Game />} />
        <Route path="/create" render={() => <Player />} />
      </Container>
    </Router>
  );
};

export default App;
