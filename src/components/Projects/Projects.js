import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter from "../../Assets/Projects/twitter.png";
import airline from "../../Assets/Projects/Airline-Operation-Dashboard.png";
import netflix from "../../Assets/Projects/Netflix-Dashboard.png";

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
              description="Used Supervised Learning Model, and Natural Language Processing (NLP) to analyze user behavior on Twitter, build Classification Models that aim to predict the tweets either positive or negative."
              ghLink="https://github.com/m7mdE/twitter_sentiment"
              demoLink="https://twitter-sentimentapp.streamlit.app/"
            />
          </Col>
        </Row>

        <h1 className="project-heading">Tableau Dashboards</h1>
        <p style={{ color: "white" }}>
          My recent work with Data Visualization
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airline}
              isBlog={false}
              title="Airline Operation Dashboard"
              description="A visual airline dashboard using synthetic data. Explore insights into airline operation performance operated in the year 2022. Our primary goal is to help airlines optimize flight status metrics, minimizing cancellations and delays in the near future. Start exploring now!"
              demoLink="https://public.tableau.com/app/profile/mohamed.emran/viz/AirlineOperationDashboard/AirlineDashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Dashboard"
              description="Created a visual simulation Netflix dashboard using synthetic data. Explore the distribution of movies and TV shows across genres. Enjoy your journey through the world of Netflix data."
              demoLink="https://public.tableau.com/app/profile/mohamed.emran/viz/NetflixDashboard_16934049274110/NetflixDashboard"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
