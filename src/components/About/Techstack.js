import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiJqueryLogo,
  DiWordpress,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGithubBadge,
  DiSpark,
} from "react-icons/di";
import {
  SiMysql,
  SiTableau,
  SiPlotly,
  SiScikitlearn,
  SiApachehadoop,
  SiApachehive,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>       
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
