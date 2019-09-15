import React, { Component } from 'react';
import './assets/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from './containers/Player/Player.js';
import Game from './containers/Game/Game.js';
import Navbar from './components/Navbar/Navbar.js';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Route path="/" exact render={() => <Game />} />
          <Route path="/create" render={() => <Player {...this.props} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps)(App);