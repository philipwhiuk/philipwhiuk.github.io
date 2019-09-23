import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import ReactGithubCalendar from '@philipwhiuk/react-github-calendar';


export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h2>Welcome</h2>
          This site provides a short summary of the projects I work on.

          <ReactGithubCalendar name="philipwhiuk" />
        </Jumbotron>
      </div>
    );
  }
}
