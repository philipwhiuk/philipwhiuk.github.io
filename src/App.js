import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SiteNavbar from './SiteNavbar';
import Home from './Home';
import Blog from './Blog';
import Serpentine from './Serpentine';
import OpenSource from './OpenSource';
import Games from './Games';
import Historical from './Historical';
import Contact from './Contact';
import CV from './CV';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <SiteNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects/open-source" component={OpenSource} />
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
