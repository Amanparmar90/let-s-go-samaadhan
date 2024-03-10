import React, { useState, useEffect } from 'react';
import imageData from './adddata.js';
import addimage1 from './Addimages/addimage1.svg';
import './Add.css'
const Adds = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex = n;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }

    setSlideIndex(newIndex);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  }

  return (
    <div className="slider-container">
      <div className="slider">
        {imageData.map((image) => (
          <img key={image.id} className="slide" src={addimage1} alt={image.alt} />
        ))}
      </div>
      {/* <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={() => plusSlides(1)}>&#10095;</button> */}

      <div className="dots">
        {imageData.map((image) => (
          <span key={image.id} className="dot" onClick={() => currentSlide(image.id)}></span>
        ))}
      </div>
    </div>
  );
}

export default Adds;







