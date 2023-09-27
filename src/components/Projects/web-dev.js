import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gibsan from "../../Assets/Projects/Gibsan-Ecommerce.png";
import driving from "../../Assets/Projects/Central-driving-school.png";
import animal from "../../Assets/Projects/Aquitaine-animal-hospital.png";
import filipinolaw from "../../Assets/Projects/Filipinolawyer-website.png";
import nbirenewal from "../../Assets/Projects/nbirenewal.png";
import jcaportal from "../../Assets/Projects/jcaportal.png";

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

        <h2 className="project-heading">
          Site Build at JCA Law
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filipinolaw}
              isBlog={false}
              title="Filipino Lawyer"
              description=""
              demoLink="https://filipinolawyer.ca/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nbirenewal}
              isBlog={false}
              title="NBI Renewal"
              description=""
              demoLink="https://nbirenewal.ca/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jcaportal}
              isBlog={false}
              title="JCA Law Portal"
              description="The goal of this project is building a CRM system to manage a streamline between an employee and a customers. This will help customers to receive an up-to-date processing time and keeping them on-loop."
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          Site Build at BreezeMaxWeb
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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

        <h2 className="project-heading">
          Site Build as Freelancer
        </h2>
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
        </Row>

      </Container>
    </Container>
  );
}

export default WebDev;
