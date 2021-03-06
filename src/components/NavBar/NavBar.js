import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gina Im</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1jCZsexsm4QhecOupIIiybNNfXbLSzZOU/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
