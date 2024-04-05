import React from 'react';
import Categoryselect from '../../assets/foodcategoryselect';

const Select_food_according_to_yourtaste = () => {
  return (
    <div>
      <h2>Select Your food Categories Which describes You The Best !!</h2>
      {Categoryselect.map((food, id) => (
        <div key={id}> {/* Corrected the key prop */}
          <img src={food.image} alt={food.title} />
          <p>{food.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Select_food_according_to_yourtaste;
