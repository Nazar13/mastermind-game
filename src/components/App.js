import React, { Component } from 'react';
import '../assets/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateUser from './CreateUser';
import UserList from './UserList.js';

class App extends Component {

  
  render() {
    return (
      <Router>
       <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
              <Link to="/" className="navbar-brand">Masterminds App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Play Game</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create User</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <Route path="/" exact component={UserList} />
            <Route path="/create" component={CreateUser} />
        </div>  
      </Router>
    )
  }
}

export default App;