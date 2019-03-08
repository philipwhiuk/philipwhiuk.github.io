import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Blog from './Blog';
import Serpentine from './Serpentine';
import Games from './Games';
import Historical from './Historical';
import Contact from './Contact';
import CV from './CV';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Philip Whitehouse</Navbar.Brand>
        </LinkContainer>
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
      </Navbar>

        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects/serpentine" component={Serpentine} />
        <Route path="/projects/games" component={Games} />
        <Route path="/projects/history" component={Historical} />
        <Route path="/cv" component={CV} />
        <Route path="/contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default App;
