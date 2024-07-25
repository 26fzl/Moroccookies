import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("menu");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className="logo" />
            
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Menu Items */}
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <Link to='/menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
                </li>
                <li>
                    <Link to='/about-us' onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>About Us</Link>
                </li>
                <li>
                    <Link to='/contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</Link>
                </li>
                <li className="sign-in-button">
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
