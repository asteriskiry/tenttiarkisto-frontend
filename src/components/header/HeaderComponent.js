import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class HeaderComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Tenttiarkisto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Koti</Nav.Link>
            <Nav.Link href="/login">Kirjaudu sisään</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
