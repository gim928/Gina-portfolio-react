import React from "react";
import "./AboutMe.css";
import BioImage from "./images/BioImage.jpg";
import { Container, Col, Row, Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <div className="bg">
        <div>
          <h1>Hi, I'm Gina Im.</h1>
          <h3>Welcome to my World</h3>
        </div>
      </div>
      <Container className="about">
        <Row>
          <Col>
            <Image
              src={BioImage}
              alt="a woman sitting cross legged at the top of a mountain with mountains behind her"
              thumbnail
            />
          </Col>
          <Col>
            <h1>About Me</h1>
            <p>
              Hello! My name is Gina Im and I am a full-stack JS developer. I
              have an undergraduate degree in biochemistry and a master's degree
              in civil and environmental engineering. I have conducted
              scientific research, worked as a structural field engineer, and,
              most recently, I have conducted workplace accident/fatality
              investigations for the feds. I have a full-stack developer
              certificate from the University of Denver and have passed the
              Fundamentals of Engineering examination for Environmental
              Engineering. Problem-solving and troubleshooting are second nature
              to me so naturally I was drawn to the tech industry. I love being
              immersed in solving a problem and building things!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
