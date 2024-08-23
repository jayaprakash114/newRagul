import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card, Alert, Spinner } from 'react-bootstrap';

function UploadCourse() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });
  const [videoPreview, setVideoPreview] = useState(null);
  const [fullVideo, setFullVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      if (name === 'videoPreview') {
        setVideoPreview(files[0]);
      } else if (name === 'fullVideo') {
        setFullVideo(files[0]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = new FormData();
    form.append('courseName', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    if (videoPreview) form.append('videoPreview', videoPreview);
    if (fullVideo) form.append('fullVideo', fullVideo);

    try {
      await axios.post('http://localhost:5000/courses', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Course uploaded successfully!');
      setFormData({ name: '', description: '', price: '' });
      setVideoPreview(null);
      setFullVideo(null);
    } catch (error) {
      console.error('Error uploading course:', error);
      setError('Error uploading course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h2>Upload Course</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCourseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter course name"
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Enter course description"
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="Enter course price"
              />
            </Form.Group>
            <Form.Group controlId="formVideoPreview" className="mt-3">
              <Form.Label>Video Preview</Form.Label>
              <Form.Control
                type="file"
                name="videoPreview"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formFullVideo" className="mt-3">
              <Form.Label>Full Video</Form.Label>
              <Form.Control
                type="file"
                name="fullVideo"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UploadCourse;
