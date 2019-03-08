import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Contact extends Component {
  render() {
    return <Container style={{marginTop: 20}}>
      <Row className="justify-content-md-center">
        <Card style={{ width: '18rem' }}>
            <ListGroup className="list-group-flush">
              <ListGroupItem><a href="https://www.linkedin.com/in/philipwhitehouse">LinkedIn</a></ListGroupItem>
              <ListGroupItem><a href="mailto:philip@whiuk.com">Email</a></ListGroupItem>
            </ListGroup>
          </Card>
      </Row>
    </Container>;
  }

}

export default Contact;
