import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({ meal }) => (
  <div className="meal">
    <Link to={`/menu/${meal.category}/${meal.name}`}>
      <h3>{meal.name}</h3>
    </Link>
  </div>
);

export default Meal;
