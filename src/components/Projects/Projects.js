import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {
  DiReact,
  DiDjango,
  DiPython,
  DiJava,
} from "react-icons/di";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiDjango />
                  <DiReact />
                </div>
              }
              isBlog={false}
              title="LicitaBSB"
              description="Licita BSB is a project aimed at promoting public tenders conducted in Brasília. Through our portal, tenders published in official gazettes are made accessible to the public."
              ghLink="https://github.com/unb-mds/LicitaBSB-24.1"
              demoLink="https://licitabsb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiJava />
                </div>
              }
              isBlog={false}
              title="Car workshop system"
              description="Mechanical Workshop System: A Java system for managing work orders, clients, and vehicles, utilizing encapsulation, inheritance, and polymorphism."
              ghLink="https://github.com/thaleseuflauzino/Orientacao-a-Objetos/tree/main/Trabalho"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiPython />
                </div>
              }
              isBlog={false}
              title="Covid-19 Dash"
              description="Interactive dashboard that visualizes the progression of COVID-19 cases and deaths in Brazil."
              ghLink="https://github.com/thaleseuflauzino/Covid-Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
