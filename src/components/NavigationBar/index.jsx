import React, { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "./logo/logo";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [scroll, setScroll] = useState(false);

  const handleContact = () => {
    console.log("Contact Me!");
  };

  const handlePageUpdate = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const onScrollEvent = () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(true);
    };
    window.addEventListener("scroll", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
    };
  }, []);

  return (
    <Navbar expand="md" className={`${scroll ? "scroll" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCode} />
          <span>berk.cohadar</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="navbar-links">
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Home" ? "active" : ""
                }`}
                href="#home"
                onClick={() => handlePageUpdate("Home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Skills" ? "active" : ""
                }`}
                href="#skills"
                onClick={() => handlePageUpdate("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Projects" ? "active" : ""
                }`}
                href="#projects"
                onClick={() => handlePageUpdate("Projects")}
              >
                Projects
              </Nav.Link>
            </div>

            <span className="navbar-social">
              <div className="navbar-social-icons">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </span>
            <div className="navbar-contact">
              <button
                className="navbar-contact-me"
                onClick={() => handleContact()}
              >
                <span>Contact Me!</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
