import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bto from "../../assets/projects/bto-store.png";
import arbol from "../../assets/projects/arbol-dashboard.png";
import starWars from "../../assets/projects/star-wars.png";

import partisepeti from "../../assets/projects/partisepeti-desktop2.png";
import ProductCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    {
      title: "partisepeti.com",
      description: (<p> Multi-vendor e-commerce web application. <br /> React.js, Next.js, Python Django, HTML/SASS <br /> React Hooks, Redux.js, Toastify.js, Axios </p>),
      img: partisepeti,
      url: "https://marketplace.scistoneprojects.com",
    },
    {
      title: "btostore.co",
      description: (<p> E-commerce landing page. <br /> React.js, HTML/SASS, Ajax, React Hooks </p>),
      img: bto,
      url: "https://btostore.co",
    },
    {
      title: "Global Climate Analytics Dashboard",
      description: (<p> Climate data analytics UI. <br /> React.js, Chart.js, MongoDB, HTML/SASS <br /> React Hooks,  Axios </p>),
      img: arbol,
      url: "https://berkcohadar.github.io/react-climate-app/",
    },
    {
      title: "Star Wars Wiki",
      description: (<p> Fun wiki project. Star Wars Planets & Residents <br /> React.js, HTML/SASS, React Hooks, Axios </p>),
      img: starWars,
      url: "https://berkcohadar.github.io/react-star-wars-planets/",
    },
  ];
  return (
    <section className="projects-section">
      <Container className="projects-container">
        <Row>
          <Col>
            <h2> Projects </h2>
          </Col>
        </Row>
        <Row className="projects-row">
          {projects.map((project, index) => {
            return (
              <ProductCard {...project} index={index} />
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
