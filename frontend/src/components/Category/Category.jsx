import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({ category }) => (
  <div className="category">
    <Link to={`/menu/${category.menu_name}`}>
      <img src={category.menu_image} alt={category.menu_name} className="category-image" />
      <h2>{category.menu_name}</h2>
    </Link>
  </div>
);

export default Category;