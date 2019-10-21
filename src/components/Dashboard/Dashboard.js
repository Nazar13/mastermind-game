import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./../../containers/Game/Game.js";
import Player from "./../../containers/Player/Player.js";
import MainNavbar from "./../Navbar/MainNavbar.js";

const Dashboard = () => {
  return (
    <>
      <Router>
        <MainNavbar />
        <Route path="/play" exact render={() => <Game />} />
        <Route exact path="/create" render={() => <Player />} />
      </Router>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
