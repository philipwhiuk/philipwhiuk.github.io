import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

class CV extends Component {
  render() {
    return <Container style={{marginTop: 10}}>
      <div class="LI-profile-badge"
        data-version="v1" data-size="large"
        data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="philipwhitehouse">
        <a class="LI-simple-link" href='https://uk.linkedin.com/in/philipwhitehouse?trk=profile-badge'>Philip Whitehouse</a>
      </div>
    </Container>;
  }

}

export default CV;
