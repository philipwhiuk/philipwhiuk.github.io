import React, { Component } from 'react';
import {Card, CardColumns, Container, Button, Row, Col} from 'react-bootstrap';

class Games extends Component {
  render() {
    return <Container style={{marginTop: 10}}>
      <Row>
      <Col>
      <CardColumns>
        {this.renderGame(
          "Text RPG",
          "TextRPG is a solo text-adventure game. The purpose of the project is to explore text-based mechanics and focus on interactivity with NPCs without having to labour on graphics and environments",
          "textrpg")}
        {this.renderGame(
          "WorldQuest",
          "WorldQuest is a solo graphical rogue-like. It uses WASD-based keyboard controls and a UI to provide a platform for generated rogue-like content",
          "worldquest")}
        {this.renderGame(
          "MUD Game",
          "MUD Game is a proto-type MUD. It aims to expand on classical MUD paradigms and the work done in Text RPG",
          "mud-game")}
      </CardColumns>
      </Col>
      </Row>
    </Container>;
  }

  renderGame(title, description, fragment) {
    return <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={"https://philipwhiuk.github.io/"+fragment+"/"}>Visit Site</Button>
      </Card.Body>
    </Card>;
  }

}

export default Games;
