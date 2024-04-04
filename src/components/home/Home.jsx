import React, { useState, useEffect } from 'react';
import masterchef from './homedata.js'; // assuming masterchef.js is in the same directory
import './Home.css';
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import { burger } from '../../assets/homdata.js';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % masterchef.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Define a function to get background image based on current index
  const getBackgroundImage = () => {
    switch(currentIndex) {
      case 0:
        return home1;
      case 1:
        return home2;
      case 2:
        return home3;
      default:
        return home1;
    }
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100%' }}>
      <div style={{ color: 'white' }}><h1>Welcome To India’s First platform providing <br/>One Stop solution to Aspiring Chefs</h1></div>
       {masterchef.map((chef, index) => (
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <p><img src={chef.star} alt="Star" /> <span style={{ color: 'white' }}>{chef.contential}</span></p>
          <h2 style={{ color: 'white' }}>{chef.master}</h2>
          <p  style={{ color: 'white' }}>{chef.content}</p>
        </div>
      ))}
      <div>
        <button>PlayNow</button>
        <a href="http://">Share <img src="#" alt="arrow" srcset="" /></a>
        </div>
        <div>
      <img src={ burger } alt="" />
      <p>To Get more features From Us  <a href="http://"> Listed Below</a><br/> <span>Our 500k + Trusted User</span> </p>
      <button>Download</button>
    </div>
    </div>
   
  );
}

export default Home;
