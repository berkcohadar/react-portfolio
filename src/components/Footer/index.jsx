import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../../assets/resume/FEE.pdf"
export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-body">
          <Col className="navbar-brand" sm={12}>
            <FontAwesomeIcon icon={faCode} />
            <span>berk.cohadar</span>
          </Col>
          <Col className="text-center text-sm-end" sm={12}>
            <span className="navbar-social">
              <div className="navbar-social-icons">
                <a
                  href={resume}
                  download="Berk_Cohadar_Resume"
                  link-title="Download My Resume"
                >
                  <FontAwesomeIcon icon={faFileDownload} />
                </a>
                <a href="https://www.linkedin.com/in/cohadarberk/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/berkcohadar" target="_blank">
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
