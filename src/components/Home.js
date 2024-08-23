// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


const Home = () => {
  return (
    <>
    <Navbar />
    <Container>
      <header className="my-5 text-center">
        <h1>Welcome to eLearning Platform</h1>
        <p>Your gateway to knowledge and skills</p>
      </header>

      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="client/src/assets/WhatsApp Image 2024-08-14 at 1.03.26 PM.jpeg" />
            <Card.Body>
              <Card.Title>Featured Courses</Card.Title>
              <Card.Text>
                Explore our most popular courses and start learning today.
              </Card.Text>
              <Button variant="primary" href="/courses">Browse Courses</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="client/src/assets/WhatsApp Image 2024-08-14 at 1.03.27 PM (1).jpeg" />
            <Card.Body>
              <Card.Title>Become an Instructor</Card.Title>
              <Card.Text>
                Share your knowledge and teach others by becoming an instructor.
              </Card.Text>
              <Button variant="primary" href="/signup">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="client/src/assets/WhatsApp Image 2024-08-14 at 1.03.27 PM.jpeg" />
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Have questions or need support? Reach out to our team for assistance.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact Us</Button>
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

export default Home;
