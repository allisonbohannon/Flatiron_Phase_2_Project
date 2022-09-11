import React from "react"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavigationBar() {
  return (
    <Navbar  bg="light">
        <Nav >
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
    </Navbar>
    
  );
}

export default NavigationBar; 