import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard({ img, title, description, url }) {
  return (
    <Col xxl={6} md={12} className="project-body">
      <img src={img} />
      <div className="project-text">
        <a style={{ all: "unset" }} href={url}>
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  );
}
