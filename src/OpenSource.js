import React, { Component } from 'react';
import {Card, CardColumns, Container, Button, Row, Col} from 'react-bootstrap';

class OpenSource extends Component {
  render() {
    return <Container style={{marginTop: 10}}>
      <Row>
      <Col>
      <CardColumns>
        {this.renderProject(
          "QuickFIXJ",
          <span>
            {"As part of my day job I contribute actively to QuickFIXJ - a "}
            <a href="https://www.fixtrading.org/what-is-fix/">FIX-based</a> networking library
          </span>,
          "https://github.com/quickfix-j/quickfixj#readme",
          "/quickfixj.png")}
        {this.renderProject(
          "React GitHub Calendar",
          "I currently maintain a React GitHub calendar NPM library which I use on this site",
          "https://www.npmjs.com/package/@philipwhiuk/react-github-calendar",
          "/npm-logo.svg")}
        {this.renderProject(
          "K-9",
          "I've previously contributed considerably to K-9 - an open source Android email client",
          "https://github.com/k9mail/k-9/commits?author=philipwhiuk",
          "/k9.jpeg")}
      </CardColumns>
      </Col>
      </Row>
    </Container>;
  }

  renderProject(title, description, url, image) {
    return <Card style={{ width: '18rem' }}>
      <Card.Body>
        {image != null ? <Card.Img variant="top" src={image} style={{width: "inherit", maxWidth: 100, marginBottom: 10}} /> : null }
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={url}>Visit Site</Button>
      </Card.Body>
    </Card>;
  }

}

export default OpenSource;
