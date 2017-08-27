import React, { Component } from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import CV from './pages/CV';
import K9 from './pages/K9';
import Contact from './pages/Contact';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact={true} path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/k9' component={K9} />
          <Route path='/cv' component={CV} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
