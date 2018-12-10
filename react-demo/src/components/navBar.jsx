import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link">
                  <NavLink to="/Home">Home</NavLink>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/About">About</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/UserForm">User Form</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
