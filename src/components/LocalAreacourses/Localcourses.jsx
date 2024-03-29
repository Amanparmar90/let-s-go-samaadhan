import React, { useState, useRef } from 'react';
import coursedata from './Localcourse';

const Localcourses = () => {
  const [state, setState] = useState("Rajasthan");
  
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  
 


  return (
    <div> 
       <div>Lets cook something from your local</div>
       <div>
          <select className='filter_state' value={state} onChange={handleStateChange}>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>
        <div className='videos' >
        {coursedata[state].map((value, index) => (
          <div key={index}>
            <img src={value.videourl} alt="" srcset="" />
            <p>{value.nameofchef}</p>
            <p>{value.recipename}</p>
            <p>{value.like}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Localcourses;
