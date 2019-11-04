import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getAuthStatus } from "../../selectors/selectors.js";
import PropTypes from "prop-types";

function MainNavbar(props) {
  function logout() {
    localStorage.removeItem('authToken');
    props.history.push('/');
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/dashboard" className="nav-link">
        Masterminds App
      </Link>
      <Nav className="mr-auto">
        <Link to="/game" className="nav-link">
          Play Game
        </Link>
        <Link to="/players" className="nav-link">
          Create New Player
        </Link>
      </Nav>
      <Nav>
        { localStorage.getItem("authToken") && <Button onClick={logout}>Log Out</Button> }
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthStatus(state)
  };
};

export default connect(mapStateToProps)(MainNavbar);

MainNavbar.propTypes = {
  isAuthenticated: PropTypes.bool
};
