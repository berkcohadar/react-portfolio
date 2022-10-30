import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import django from "../../assets/logos/django-rest.png"
import react from "../../assets/logos/React-icon.svg.png"
import typeScript from "../../assets/logos/typescript-logo.png"
import javaScript from "../../assets/logos/JavaScript-logo.png"
import python from "../../assets/logos/python-logo.png"
import sass from "../../assets/logos/sass-logo.png"
import next from "../../assets/logos/nextjs-logo.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills-section">
      <Container className="skills-container">
        <Row>
          <Col>
          <div className="skills">
            <h2>Skills</h2>
            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                <div className="skill">
                    <img src={react} alt=""/>
                    <h5>React.js</h5>
                </div>
                <div className="skill">
                    <img src={next} alt=""/>
                    <h5>Next.js</h5>
                </div>
                <div className="skill">
                    <img src={python} alt=""/>
                    <h5>Python</h5>
                </div>
                <div className="skill">
                    <img src={typeScript} alt=""/>
                    <h5>TypeScript</h5>
                </div>

                <div className="skill">
                    <img src={django} alt=""/>
                    <h5>Django REST</h5>
                </div>
                <div className="skill">
                    <img src={javaScript} alt=""/>
                    <h5>JavaScript</h5>
                </div>
                <div className="skill">
                    <img src={sass} alt=""/>
                    <h5>SASS</h5>
                </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
