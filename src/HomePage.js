// src/HomePage.js

import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <About />
      <Courses />
      <Contact />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
};

export default HomePage;
