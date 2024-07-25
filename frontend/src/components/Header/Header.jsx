import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Let's craft some Moroccan delicious treats!</h2>
                <p>Discover a multitude of easy baking recipes to find your next beloved Sweet</p>
                <Link to="/menu" className="menu">
                    View Menu
                </Link>
                </div>

        </div>
    )
}

export default Header