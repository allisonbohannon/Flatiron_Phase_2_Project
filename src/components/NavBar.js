import React from "react"
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import Button from "react-bootstrap/esm/Button";


function NavBar() {
  return (
    <Nav  justify variant="tabs" className="">
      <Nav.Item>
        <LinkContainer 
          to="/"
        >
          <Button>Home</Button>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer
          to="/appetizers"
        >
          <Button>Appetizers</Button>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer
          to="/sides"
        >
          <Button>Sides</Button>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer
          to="/mains"
        >
          <Button>Mains</Button>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer
          to="/desserts"
        >
          <Button>Desserts</Button>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer
          to="/addnew"
        >
          <Button>Add Something New!</Button>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar; 