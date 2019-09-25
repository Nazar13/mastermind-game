import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        Masterminds App
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Play Game
        </Link>
        <Link to="/create" className="nav-link">
          Create New Player
        </Link>
      </Nav>
      <Nav>
        <Link to="/login">Log In</Link>
      </Nav>
    </Navbar>
  );
}

export default MainNavbar;
