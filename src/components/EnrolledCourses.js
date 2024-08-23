import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, Video } from 'react-bootstrap';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses/enrolled', {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <Container className="mt-5">
      <h1>Enrolled Courses</h1>
      <ListGroup>
        {courses.map(course => (
          <ListGroup.Item key={course._id}>
            <h2>{course.courseName}</h2>
            <p>{course.description}</p>
            <Video width="320" height="240" controls>
              <source src={course.fullVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default EnrolledCourses;
