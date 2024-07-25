import React from 'react';
import Category from '../../components/Category/Category';
import './Menu.css'
import { menu_list } from '../../assets/assets';

const Menu = () => (
  <div className="menu">
    <h1>Menu</h1>
    {menu_list.map((category, index) => (
      <Category key={index} category={category} />
    ))}
  </div>
);

export default Menu;



