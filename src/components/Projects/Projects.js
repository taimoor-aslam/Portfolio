import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Remember from "../../Assets/Projects/remember.webp";
import KinFolk from "../../Assets/Projects/kinfolk.png";
import MazGlobal from "../../Assets/Projects/maz-global.png";
import DfsArmy from "../../Assets/Projects/dfs-army.png";
import Pernia from "../../Assets/Projects/pernia.png";
import ForestTown from "../../Assets/Projects/foresttown.png";
import NobleQuote from "../../Assets/Projects/noblequote.png";

function Projects() {
  const projects = [
    {
      imgPath: DfsArmy,
      title: "DFS ARMY",
      description:
        "A web application built with MEAN stack which is a research site, lineup optimizer tool, and collaboration platform bundled into one. It's a popular solution for DFS players looking to both prepare for weekly slates and improve their performance in daily fantasy contests.",
      demoLink: "https://stage.dfsarmy.com/",
    },
    {
      imgPath: NobleQuote,
      title: "Noble Quote",
      description:
        "A web application built with MEAN stack which is a rapidly expanding provider of premium automotive vehicle service contracts. Leveraging vast experience in the automotive field, offering exceptional products that meet the unique needs of valued clients.",
      demoLink: "https://noblequote.com/",
    },
    {
      imgPath: KinFolk,
      title: "KINFOLK",
      description:
        "A web application built with MERN stack which is used to integrate various HR functions into a unified system that shares data and outputs reports across the entire platform as a core functionality.",
      demoLink: "https://develop.d3v00pgd5kf0ej.amplifyapp.com",
    },
    {
      imgPath: MazGlobal,
      title: "MAZ GLOBAL",
      description:
        "A web application built with MERN stack, MAZ Global is an online auto parts store, operating as a global wholesale and retail provider of aftermarket auto parts. They are the trusted suppliers of automotive spare parts with a focus on delivering high-quality goods at competitive prices.",
      demoLink: "https://www.mazglobal.co.uk/",
    },
    {
      imgPath: Pernia,
      title: "PERNIA",
      description:
        "A web application built with MERN stack, A cloth brand website.",
      demoLink: "https://www.mazglobal.co.uk/",
    },
    {
      imgPath: Remember,
      title: "REMEMBER",
      description:
        "A Flutter mobile app to hold precious memories that start young, to cherish and remember!",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.applicity.remember&pli=1",
    },
    {
      imgPath: ForestTown,
      title: "Forest Town",
      description:
        "A web application built with MERN stack, A housing scheme in Pakistan offering promising biophilic concepts and architectures in the ethos of the urban community.  Biophilia is currently the most sought and popular concept among town planners and organizations.",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.applicity.remember&pli=1",
    },
  ];

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
          {projects.map((project) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
