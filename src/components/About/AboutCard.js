import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi EveryOne! My name is <span className="purple">Mohamed Emran</span> located in <span className="purple">Toronto.</span>
          <br />
          <br />
           My passion became around data, as my work experience began in a digital marketing agency where I started as a web developer. After a year, I began to develop a certain set of skills in analytics such as understanding a business customer as well as analyzing and comparing their competition.
          <br />
          <br /> 
          Recently, I graduated as a <span className="purple">Data Scientist</span> from BrainStation
          <br />
          <br />
          Additionally, I am currently employed as a web developer at
          JCA Law.
          <br />
          <br /> 
          </p>

          <p style={{ color: "rgb(126 140 172)" }}>
            <i>"Success isn't always about 'Greatness', it's about consistency. Consistent, hard work gains success. Greatness will come."{" "}</i>
          </p>
          <footer className="blockquote-footer">Dwayne Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
