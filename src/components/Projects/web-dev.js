import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gibsan from "../../Assets/Projects/Gibsan-Ecommerce.png";
import driving from "../../Assets/Projects/Central-driving-school.png";
import animal from "../../Assets/Projects/Aquitaine-animal-hospital.png";

function WebDev() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong> as Web Developer
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gibsan}
              isBlog={false}
              title="Gibsan"
              description=""
              demoLink="https://shop.gibsanapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driving}
              isBlog={false}
              title="Central Driving School"
              description=""
              ghLink=""
              demoLink="https://centraldrivingschool.ca/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animal}
              isBlog={false}
              title="Aquitaine Animal Hospital"
              description=""
              ghLink=""
              demoLink="https://aquitainevet.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WebDev;
