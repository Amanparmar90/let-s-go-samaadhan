import React from "react";
import "./Courselistening.css";
import Coursedata from "./Coursedata"; // Adjust the path accordingly

const CourseListening = () => {
  return (
    <>
      <div className='footertop'>
        {Coursedata.map(course => (
          <div key={course.id} className="course-card">
           <img src={course.thumbnail} alt={course.title} />
            <div className="course-desc">
              <h3>{course.title}</h3>
              <p>Instructors: {course.instructors.join(", ")}</p>
              <ul>
                {course.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <hr />
            </div>
            <div className="getcourse">
              <div className="courseprice">{course.price}</div>
              <div className="getcoursebutton"><button>{course.button}</button></div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseListening;
