import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import ReactGithubCalendar from '@philipwhiuk/react-github-calendar';

class Home extends Component {
  render() {
    return <header className="App-header">
      <Image src="/me.jpg" alt="Profile picture" roundedCircle />
      <div style={{margin: 20}}>Personal site of Philip Whitehouse.</div>

      <ReactGithubCalendar name="philipwhiuk" style={{background: "white"}} />
    </header>;
  }

}

export default Home;
