// src/components/About.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
        <Navbar />
    <Container>
      <header className="my-5 text-center">
        <h1>About Us</h1>
        <p>Learn more about our mission and team</p>
      </header>

      <Row className="mb-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At eLearning Platform, our mission is to provide accessible, high-quality education to learners around the world. We aim to empower individuals with knowledge and skills that can enhance their personal and professional lives.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Our team consists of passionate educators, industry experts, and dedicated support staff who work tirelessly to create and deliver exceptional learning experiences. Meet our team members and learn about their backgrounds and contributions.
              </Card.Text>
              <Button variant="primary" href="/team">Meet the Team</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Our History</Card.Title>
              <Card.Text>
                Founded in [Year], eLearning Platform started with a vision to make education more accessible and engaging. Over the years, we have grown and evolved, continuously expanding our offerings and improving our services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <footer className="text-center my-5">
        <p>&copy; {new Date().getFullYear()} eLearning Platform. All rights reserved.</p>
      </footer>
    </Container>
    </>
  );
};

export default About;
