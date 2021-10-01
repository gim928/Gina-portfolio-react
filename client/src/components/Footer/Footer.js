import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gina Im</Navbar.Brand>
          <Nav.Link href="#AboutMe">Github</Nav.Link>
          <Nav.Link href="#portfolio">LinkedIn</Nav.Link>=
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
