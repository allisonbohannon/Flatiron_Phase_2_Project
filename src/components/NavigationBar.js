import React from "react"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavigationBar() {
  return (
    <Navbar  bg="light">
        <Nav defaultActiveKey="home">
          <Nav.Item>
            <Nav.Link 
              as={Link}
              to="/"
              eventKey="home"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/appetizers"
              eventKey="appetizers"
            >
              Appetizers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/sides"
              eventKey="sides"
            >
              Sides
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/mains"
              eventKey="mains"
            >
              Mains
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/desserts"
              eventKey="desserts"
            >
              Desserts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/addnew"
              eventKey="addnew"
            >
              Add Something New!
            </Nav.Link>
          </Nav.Item>
      </Nav>
    </Navbar>
    
  );
}

export default NavigationBar; 