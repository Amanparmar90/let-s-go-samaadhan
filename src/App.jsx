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
import Select_food_according_to_yourtaste from './components/fooditemsdescribe/Select_food_according_to_yourtaste';

function App() {
  return (
    <>
    <Home />
       <Add />
      <br />
      <Service />
      <Select_food_according_to_yourtaste />
      <Freevideos />
      <Poster /> 
       <Localcourses />
     <CourseListening /> 
      <Footer />
    </>
  );
}

export default App;
