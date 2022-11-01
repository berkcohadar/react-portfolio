import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bto from "../../assets/projects/bto-store.png";
import partisepeti from "../../assets/projects/partisepeti-desktop2.png";
import ProductCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    {
      title: "partisepeti.com",
      description: "Multi-vendor e-commerce web application.",
      img: partisepeti,
      url: "https://marketplace.scistoneprojects.com",
    },
    {
      title: "btostore.co",
      description: "E-commerce landing page.",
      img: bto,
      url: "https://btostore.co",
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
