import React from 'react';
import { useParams } from 'react-router-dom';
import Meal from '../../components/Meal/Meal';
import { food_list } from '../../assets/assets';
import './CategoryPage.css'

const meals = {
  'Choco Sablé Sweets': [
    { name: 'Jam Shortbread Cookies', category: 'Choco Sablé Sweets' },
    { name: 'Viennese Shortbread', category: 'Choco Sablé Sweets' },
    { name: 'Zellige', category: 'Choco Sablé Sweets' },
    { name: 'Orange and Chocolate Biscuits', category: 'Choco Sablé Sweets' },
  ],
  'Almond Sweets': [
    { name: 'Almond Gazelle Horn Pastry', category: 'Almond Sweets' },
    { name: 'Mlowza', category: 'Almond Sweets' },
    { name: 'Briouate', category: 'Almond Sweets' },
    { name: 'Fekkas', category: 'Almond Sweets' },
  ],
  'Deserts': [
    { name: 'Jawhara', category: 'Deserts' },
    { name: 'Oranges with Cinnamon', category: 'Deserts' },
    { name: 'El Halwa El Filaliya', category: 'Deserts' },
    { name: 'Amlou Ice Cream', category: 'Deserts' },
  ],
  'Ramadan Sweet': [
    { name: 'Chbakia', category: 'Ramadan Sweet' },
    { name: 'Almond sellou', category: 'Ramdan Sweet' },
    { name: 'Makrouts', category: 'Ramadan Sweet' },
    { name: 'Rghaif with Honey', category: 'Ramadan Sweet' },
  ],
  'Cake': [
    { name: 'Orange Cake', category: 'Cake' },
    { name: 'Almond Cake', category: 'Cake' },
    { name: 'Cake with Orange Blossom', category: 'Cake' },
    { name: 'Marble Chocolate Cake', category: 'Cake' },
  ],
  'Vegan': [
    { name: 'Mhanncha', category: 'Vegan' },
    { name: 'Jam cookies', category: 'Vegan' },
    { name: 'Crispy Rolls', category: 'Vegan' },
    { name: 'Lemon Ghriba', category: 'Vegan' },
  ],
  'Gluten Free': [
    { name: 'Almond Ghriyba', category: 'Gluten Free' },
    { name: 'Glazed Sugar Ghriyba', category: 'Gluten Free' },
    { name: 'Semolina Cake', category: 'Gluten Free' },
    { name: 'Apricot Cookies', category: 'Gluten Free' },
  ],
  'Drinks': [
    { name: 'Avocado Zaazaa Juice', category: 'Drinks' },
    { name: 'Mint tea', category: 'Drinks' },
    { name: 'Pomegranate Juice', category: 'Drinks' },
    { name: 'Almond juice', category: 'Drinks' },

  ],
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div className="category-page">
      <h1>{categoryName}</h1>
      {meals[categoryName]?.map((meal, index) => (
        <Meal key={index} meal={meal} />
      ))}
    </div>
  );
};

export default CategoryPage;