import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <span className="nav-link">
                  <NavLink to="/Home">Home</NavLink>{" "}
                  <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <NavLink to="/About">About</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/UserForm">User Form</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/ReactComponentLifeCycle">Reach Component Life Cycle</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
