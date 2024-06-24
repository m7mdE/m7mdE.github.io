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
import tachitools from "../../Assets/Projects/Tachitools.png";
import pemberton from "../../Assets/Projects/pembertongroup.png";
import profilmoto from "../../Assets/Projects/profilmoto.png";
import pmcaravanes from "../../Assets/Projects/pmcaravanes.png";
import hyundaivictoriaville from "../../Assets/Projects/hyundaivictoriaville.png";
import kiavictoriaville from "../../Assets/Projects/kiavictoriaville.png";
import leveilletoyota from "../../Assets/Projects/leveilletoyota.png";
import ford440 from "../../Assets/Projects/440ford.png";

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
          Site Build as Freelancer
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tachitools}
              isBlog={false}
              title="Tachitools"
              description=""
              demoLink="https://tachitools.com/"
            />
          </Col>
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
              imgPath={pemberton}
              isBlog={false}
              title="Pemberton Group"
              description=""
              demoLink="https://pembertongroup.com/"
            />
          </Col>
        </Row>

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
          Site Build at AutoTrader
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pmcaravanes}
              isBlog={false}
              title="P.M. Caravanes"
              description=""
              ghLink=""
              demoLink="https://www.pmcaravanes.ca/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyundaivictoriaville}
              isBlog={false}
              title="Hyundai Victoriaville"
              description=""
              ghLink=""
              demoLink="https://www.hyundaivictoriaville.com/eng/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiavictoriaville}
              isBlog={false}
              title="Kia Victoriaville"
              description=""
              ghLink=""
              demoLink="https://www.kiavictoriaville.com/eng/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leveilletoyota}
              isBlog={false}
              title="Léveillé Toyota"
              description=""
              ghLink=""
              demoLink="https://www.leveilletoyota.com/en/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ford440}
              isBlog={false}
              title="440 Ford Laval"
              description=""
              ghLink=""
              demoLink="https://www.440ford.ca/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profilmoto}
              isBlog={false}
              title="Profil Moto"
              description=""
              ghLink=""
              demoLink="https://www.profilmoto.ca/fr/"
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

        
      </Container>
    </Container>
  );
}

export default WebDev;
