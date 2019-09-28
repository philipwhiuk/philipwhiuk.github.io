import React, { Component } from 'react';
import {Button, ButtonGroup, Card, CardColumns, Container, Row, Col} from 'react-bootstrap';

class Talks extends Component {
  render() {
    return <Container style={{marginTop: 10}}>
      <Row>
      <Col>
      <CardColumns>
        {this.renderTalk(
          "React Europe 2018 Summary",
          "In 2018 I attended React Europe 2018. When I got back I presented a short summary talk on some of the interesting projects",
          "reactEuropeTalk",
          "http://reacteurope2018-summary.surge.sh")}
      </CardColumns>
      </Col>
      </Row>
    </Container>;
  }

  renderTalk(title, description, githubRepo, url) {
    return <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ButtonGroup vertical>
        <Button variant="primary" href={"https://github.com/philipwhiuk/"+githubRepo+"/"}>Source Code</Button>
        <Button variant="dark" href={url}>View Slides</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>;
  }

}

export default Talks;
