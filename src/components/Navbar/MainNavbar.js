import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { getAuthStatus } from "../../selectors/selectors.js";
import PropTypes from 'prop-types';

function MainNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        Masterminds App
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Play Game
        </Link>
        { (props.isAuthenticated) && (<Link to="/create" className="nav-link">
            Create New Player
          </Link>)
        }
      </Nav>
      <Nav>
        { (props.isAuthenticated) ? 
          <Link to="/logout">Log Out</Link> :
          <Link to="/login">Log In</Link>     
        }
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthStatus(state),
  };
};

export default connect(mapStateToProps)(MainNavbar);

MainNavbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};