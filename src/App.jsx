import React from 'react';
import './App.css';
import Footer from './components/Footer';
import CourseListening from './components/Course/CourseListening';
import Add from './components/Add/Adds';
import Poster from './components/Poster/Poster';
import Localcourses from './components/LocalAreacourses/Localcourses';
import Service from './components/Service provide/Service';
import Freevideos from './components/freerecordedvideos/Freevideos';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <Home />
       <Add />
      <br />
      <Service />
      <Freevideos />
      <Poster /> 
       <Localcourses />
     <CourseListening /> 
      <Footer />
    </>
  );
}

export default App;
