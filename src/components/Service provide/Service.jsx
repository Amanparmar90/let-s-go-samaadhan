// Service.js

import React from 'react';
import serviceimageData from '../../assets/data';
import './Service.css'

const Service = () => {
  return (
    <div>
      <h2>Service We Provide</h2>
      <h1>Get Your Kitchen into your Pocket</h1>
      <div className='serviceshow'>
        {serviceimageData.map(({ id, image, text }) => (
          <div key={id}>
            <img src={image} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service;
