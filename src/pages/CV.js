import React, { Component } from 'react';
import flextradeLogo from '../flextrade.png';
import telsisLogo from '../telsis.jpg';

export default class CV extends Component {
  render() {
    return (
      <div className="container">
        <img style={{float: "right", background: "black"}} alt="FlexTrade" src={flextradeLogo} />
        <h3>FlexTrade Ltd <span style={{fontSize: "medium", color: "grey"}}>London, UK</span></h3>
        <h4>Senior Developer (August 2017-Present)</h4>
        <h4>Developer (2014-2017)</h4>

        <p>My work at FlexTrade has involved the development, deployment and
        release of various products based around the FIX protocol. This has included:</p>

        <ul>
          <li>Design, development of a web-based monitoring tool</li>
          <li>Development of a message converter to aid integration of products
            into a FIX network.</li>
          <li>Performance analysis, debugging and fault tolerance work on a
            production-ready message routing tool</li>
          <li>Development work on a wide range of both-programatic and
            specification-based testing tools for conformance and validation
            including a web-based tool for automated validation</li>
        </ul>

        <h5>Software Design & Development Processes:</h5>

        <p>During this time I have continued to use standardised software
          development tools and processes, including: inside-out TDD with a
          BDD focus on test design; managing and maintaining continuous
          integration system and leading agile-based sprint planning sessions
          to evaluate complexity of issues raised by both within the team and
          as a result of external requirements.</p>

        <p>I continue to use deployment libraries such as Maven, alongside
          SBT and NPM to promote code re-use internally.</p>

        <h5>Java And Scala Back-end Work</h5>

        <p>This work has involved continuing to demonstrate prior Java skills
          (and new Java 8 behaviour), with an ongoing focus on clean code and
          SRP behaviour, during both maintenance of existing code and when
          designing new features. It has also involved learning and deploying
          Scala-based projects, including work with the Play and Akka
          frameworks. This has also included further work in networking
          messaging libraries such as Protobuf and Thrift.</p>

          <h5>JavaScript, JSX, React, LESS, HTML Front-End Work</h5>

          With the increasing use of JavaScript across the company I have also gained considerable experience in jQuery, React, Redux, Gulp, Squire and Mocha. The HTML5 web-projects have been constructed with the benefit of LESS-based styling.

          <h5>Database Usage</h5>

          <p>Database work has involved both SQL databases such as H2 and
            PostgreSQL as well as MongoDB and RethinkDB.</p>
          <img alt="Telsis" style={{float: "right", width: "100px", clear: "both"}} src={telsisLogo} />
          <h3>Telsis Ltd <span style={{fontSize: "medium", color: "grey"}}>Fareham, UK</span></h3>
          <h4>Developer</h4>
          <h4>Graduate Developer</h4>
      </div>
    );
  }
}
