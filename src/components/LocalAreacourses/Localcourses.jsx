import React, { useState, useRef } from 'react';
import coursedata from './Localcourse';

const Localcourses = () => {
  const [state, setState] = useState("Rajasthan");
  
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  
 


  return (
    <div> 
       <div><h2>Lets cook something from your local</h2></div> <br/>
       <div>
          <select className='filter_state' value={state} onChange={handleStateChange}>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>
        <br/>
        <div className='videos' >
        {coursedata[state].map((value, index) => (
          <a href="http://">
          <div key={index}>
            <img src={value.videourl} alt="" srcset="" />
            <h2></h2>
            <p>{value.recipename}<br/>
              {value.nameofchef}<br/>  
            {value.like}</p>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Localcourses;
