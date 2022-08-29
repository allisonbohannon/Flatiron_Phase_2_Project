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
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Appetizers"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Appetizers
      </NavLink>
      <NavLink
        to="/Sides"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sides
      </NavLink>
      <NavLink
        to="/mains"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Mains
      </NavLink>
      <NavLink
        to="/dessert"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Dessert
      </NavLink>
    </div>
  );
}

export default NavBar; 