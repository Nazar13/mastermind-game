import React from 'react';
import MainNavbar from "../Navbar/MainNavbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Player from "../../containers/Player";
import Game from "../../containers/Game/Game.js";
import { withRouter } from "react-router";

const Dashboard = (props) => {
  return (
      <Router>
      <Container fluid="true">
        <MainNavbar {...props}/>
        <Switch> 
          <Route path="/game"  render={() => <Game />} /> 
          <Route path="/players" render={() => <Player />} />  
        </Switch>
      </Container>
      </Router>
  )
}
export default withRouter(Dashboard);