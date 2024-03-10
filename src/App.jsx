import React from 'react';
import './App.css';
import Footer from './components/Footer';
import CourseListening from './components/Course/CourseListening';
import Add from './components/Add/Adds';
import Poster from './components/Poster/Poster';

function App() {
  return (
    <>
      <Add />
      <br />
      <Poster />
      <CourseListening />
      <Footer />
    </>
  );
}

export default App;
