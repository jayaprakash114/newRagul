import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Card, Spinner, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Courses = () => {
  const [course, setCourse] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        if (response.data.length > 0) {
          setCourse(response.data[0]);
        } else {
          console.error('No courses found');
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, []);

  const handlePayment = async () => {
    try {
      setIsPaid(true);
      navigate('/register'); // Redirect to the registration page
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!course) {
    return <Alert variant="warning" className="mt-5">No course available.</Alert>;
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '20rem', padding: '10px' }}>
        <Row noGutters>
          <Col md={4}>
            <video width="100%" height="auto" controls>
              <source src={course.videoPreview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{course.courseName}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text>Price: ${course.price}</Card.Text>
              {isPaid ? (
                <div>
                  <h6>Full Course</h6>
                  <video width="100%" height="auto" controls>
                    <source src={course.fullVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="d-flex justify-content-center">
                  <Button variant="success" size="sm" onClick={handlePayment}>
                    Enroll course
                  </Button>
                </div>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Courses;
