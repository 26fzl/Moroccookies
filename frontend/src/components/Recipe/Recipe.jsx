import React from 'react';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions: </h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;

