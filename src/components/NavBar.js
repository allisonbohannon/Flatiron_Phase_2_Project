import React from "react"
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav nav-pill">
      <NavLink 
        to="/"
        className="navbar-brand"
      >
        Home
      </NavLink>
      <NavLink
        to="/appetizers"
        className="navbar-brand"
      >
        Appetizers
      </NavLink>
      <NavLink
        to="/sides"
        className="navbar-brand"
      >
        Sides
      </NavLink>
      <NavLink
        to="/mains"
        className="navbar-brand"
      >
        Mains
      </NavLink>
      <NavLink
        to="/desserts"
        className="navbar-brand"
      >
        Desserts
      </NavLink>

      <NavLink
        to="/addnew"
        className="navbar-brand"
      >
        Add Something New!
      </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar; 