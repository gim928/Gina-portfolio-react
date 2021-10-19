import React, { useState } from "react";
import { Form, Container, Card, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <h1> Contact Info </h1>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>My Contact Information</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <a href="mailto:eaim928@gmail.com">Email</a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/gina-im-161072a8/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/gim928" target="_blank">
                        Github
                      </a>
                    </li>
                  </ul>
                </Card.Text>
                <Button
                  variant="dark"
                  href="https://drive.google.com/file/d/1jCZsexsm4QhecOupIIiybNNfXbLSzZOU/view?usp=sharing"
                  target="_blank"
                >
                  Download my resume!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter your comment here!</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark" class="contact">
              Submit!
            </Button>
          </Form> */}
        </Row>
      </Container>
    </>
  );
};

export default Contact;
