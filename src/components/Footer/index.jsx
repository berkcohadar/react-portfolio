import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {  faCode, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col className="navbar-brand" sm={6}>
            <FontAwesomeIcon icon={faCode} />
            <span>berk.cohadar</span>
          </Col>
          <Col className="text-center text-sm-end">
            <span className="navbar-social">
              <div className="navbar-social-icons">
              <a href="#" link-title="Download My Resume">
                  <FontAwesomeIcon icon={faFileDownload} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>CopyRight 2022. All rights reserved by Scistone.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
