import React from "react"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <Nav  justify variant="tabs"  className="">
      <Nav.Item>
        <Nav.Link 
          as={Link}
          to="/"
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/appetizers"
        >
          Appetizers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/sides"
        >
          Sides
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/mains"
        >
          Mains
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/desserts"
        >
          Desserts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/addnew"
        >
          Add Something New!
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar; 