import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hacker from "../animations/Hacker";
import SpaceHacker from "../animations/SpaceHacker";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import me from "../../assets/me.jpeg";
export default function About() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Engineer"];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(period);
    }
  };

  const handleContact = () => {
    console.log("Contact Me!");
  };
  return (
    <section className="main-banner" id="home">
      <Container className="main-banner-container">
        <Row className="align-items-center">
          <Col className="main-banner-col" xs={12} sm={12} md={6} xl={7}>
            <a
              href="https://www.github.com/berkcohadar"
              target="_blank"
              className="main-banner-github"
            >
              <p>Github</p>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <div className="main-banner-profile">
              <div className="profile-image">
                <img src={me}></img>
              </div>
              <div className="profile-title">
                <h1>
                  Berk<strong>{".is()"}</strong>
                </h1>
                <span
                  className="main-banner-text-anim"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="main-banner-current-text">{text}</span>
                </span>
              </div>
            </div>
            <span
              className="main-banner-text-anim mobile"
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            >
              <span className="main-banner-current-text">{text}</span>
            </span>
            <p>
              Focusing on mobile-first web development. 2+ years of solid
              experience working with React.js, Next.js, and Python Django.
              Proficient in responsive design, adaptive design, UI/UX design,
              API design, and database design. Goal-oriented and quick-learner.
            </p>
            <div className="main-banner-connect">
              <a
                href="https://www.linkedin.com/in/cohadarberk/"
                target="_blank"
              >
                <button onClick={() => handleContact()}>
                  Let's Connect!
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} xl={5}>
            {/* <Hacker/> */}
            <SpaceHacker />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
