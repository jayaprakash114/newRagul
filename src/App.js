import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Register from './components/Register';
import Contact from './components/Contact';
import Signup from './components/Signup';
import CourseUpload from './components/CourseUpload';
import AdminLogin from './components/AdminLogin';


function App() {
  return (
    <Router>
      
      
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courseupload" element={<CourseUpload />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App; 
