import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import twitter from "../../Assets/Projects/twitter.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong> as Data Scientist
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Sentiment"
              description="I uses Supervised Learning Model, and Natural Language Processing (NLP) to analyze user behavior on Twitter, build Classification Models that aim to predict the tweets either positive or negative."
              ghLink="https://github.com/m7mdE/twitter_sentiment"
              demoLink="https://twitter-sentimentapp.streamlit.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
