import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import GitHubCalendar from 'github-calendar';


export default class Main extends Component {
  render() {
    GitHubCalendar(".calendar", "philipwhiuk");
    return (
      <div className="container">
        <Jumbotron>
          <h2>Welcome</h2>
          This site provides a short summary of the projects I work on.

          <div class="calendar">
          </div>
        </Jumbotron>
      </div>
    );
  }
}
