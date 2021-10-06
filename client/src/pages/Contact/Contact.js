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
                      <a href="eaim928@gmail.com">Email</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </Card.Text>
                <Button variant="dark">Download my resume!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
