import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item pe-5">
            <NavLink to="/" className="nav-link  text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item pe-5">
            <NavLink to="/about" className="nav-link  text-white">
              About
            </NavLink>
          </li>
          <li className="nav-item pe-5">
            <NavLink to="/addcontact" className="nav-link  text-white">
              Add Post
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
