import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link to="/" className="navbar-brand">Masterminds App</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Play Game</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create New Player</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;