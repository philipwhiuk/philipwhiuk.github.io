import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

class SiteNavbar extends Component {
  render() {
    return <Navbar bg="dark" variant="dark" expand="sm">
      <LinkContainer to="/">
        <Navbar.Brand>Philip Whitehouse</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <LinkContainer to="/projects/serpentine">
              <NavDropdown.Item>Serpentine</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/projects/open-source">
              <NavDropdown.Item>Open Source</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/projects/games">
              <NavDropdown.Item>Games</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/projects/history">
              <NavDropdown.Item>Historical Content</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/cv">
            <Nav.Link href="#cv">CV</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default SiteNavbar;
