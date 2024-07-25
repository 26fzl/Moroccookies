import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'; 



const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className="logo-image"/>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com/moroccookies" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/moroccookies" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://linkedin.com/moroccookies" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>Moroccookies</h2>
                        <p>If you are looking for cuisine full of flavors and delicacies, you are in the right place. Here, you will find simple recipes made with easy-to-find ingredients. Feel free to visit us often. See you soon!</p>
                </div>
                <div className="footer-content-right">
                    <h2>Get to know us</h2>
                    <ul>
                    <Link to='/' onClick={()=>setMenu("home")}>Home</Link>
                    <Link to='/about-us' onClick={() => setMenu("about-us")} >About Us</Link>
                    <Link to='/contact-us' onClick={() => setMenu("contact-us")} >Contact us</Link>
                    <li>+212 666 66 66 66</li>
                    <li>moroccookies@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ Moroccookies - All Right Reserved.</p>
        </div>
    )
}

export default Footer