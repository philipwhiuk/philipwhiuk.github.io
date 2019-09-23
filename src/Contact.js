import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Contact extends Component {
  render() {
    return <Container style={{marginTop: 20}}>
      <Row className="justify-content-md-center">
        <Card style={{ width: '18rem' }}>
          <ButtonGroup vertical>
            <Button href="https://www.linkedin.com/in/philipwhitehouse">LinkedIn</Button>
            <Button variant="secondary" href="mailto:philip@whiuk.com">Email</Button>
          </ButtonGroup>
        </Card>
      </Row>
    </Container>;
  }

}

export default Contact;
