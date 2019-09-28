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
        {this.renderGame(
          "JRogue",
          <span>
            An initial implementation of a Rogue-like featuring a dungeon generation algorithm.
            </span>,
          "JRogue")}
        {this.renderGame(
          "2D Games",
          <span>
            When I first starting making games in Java I knew a big project was the wrong starting point.
            So I started writing a series of increasing complex 2D games to help learn the basics.
            The games included are: Missile Attack, Pacman, Snake. In development still are Apeiron and an RPG.
            </span>,
          "2D-Games")}
        {this.renderGame(
          "Ludum Dare 25",
          <span>
            At the time LD 25 ('You Are The Villan') launched I was trying to write small Java games.
            I wrote a partial attempt at a room-exploration game - the original premise was going to be around infiltrating a base.
            Unfortunately Java applet technology in browsers has pretty much died
            so the original deployment mechanism doesn't work.
            At some point I might pick this prototype up and re-release it as a more complete game.
            </span>,
          "ludumdare25")}
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
