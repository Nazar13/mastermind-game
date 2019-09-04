import React, { Component } from 'react';
import '../assets/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from './containers/Player/Player.js';
import Game from './containers/Game/Game.js';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Route path="/" exact component={Game} />
          <Route path="/create" component={Player} />
        </div>
      </Router>
    );
  }
}

export default App;