import React from 'react';
import './ContactUs.css'

  
const ContactUs = () => {
    return (
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Have a question or feedback for us? We'd love to hear from you! </p>
        
        <h2>Get in Touch</h2>
        <p>You can reach out to us via email at <a href="mailto:your-email@example.com">moroccookies@gmail.com</a> or fill out the form below. We'll get back to you as soon as possible.</p>
        
        <h2>Social Media</h2>
        <ul>
          <li><a href="https://www.facebook.com/Moroccookies" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/Moroccookies" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>

        <h2>Visit Us</h2>
        <p>Want to see more? Visit our chanel at <a href="http://www.youtube.com/moroccookies" target="_blank" rel="noopener noreferrer">www.youtube.com/moroccokies</a> for more recipes and sweet treats!</p>
      
        <p>Thank you for being a part of our sweet journey. We look forward to connecting with you!</p>
      </div>
    );
  };

export default ContactUs;
