import React from "react"
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/Appetizers"
        style={linkStyles}
      >
        Appetizers
      </NavLink>
      <NavLink
        to="/Sides"
        style={linkStyles}
      >
        Sides
      </NavLink>
      <NavLink
        to="/mains"
        style={linkStyles}
      >
        Mains
      </NavLink>
      <NavLink
        to="/desserts"
        style={linkStyles}
      >
        Desserts
      </NavLink>
    </div>
  );
}

export default NavBar; 