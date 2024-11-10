import React from 'react';
import '../styles/Footer.css';  // Ensure you create the appropriate CSS for styling
import logo from '../assets/logo.jpg';  // Replace with the correct logo path
import { Link } from 'react-router-dom'; 
 import instagram from '../assets/instagram.jpeg';
 import facebook  from '../assets/facebook.png';
 import twitter from '../assets/twitter.png';

const Footer1 = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Left side: Logo */}
        <div className="footer-logo">
          <img style={{borderRadius:'50p%'}}src={logo} alt="Logo" className="footer-logo-img" />
          <h2>INDIAN RAILWAYS</h2>
        </div>

        {/* Center: Service links */}
        <div className="footer-services">
          <h3>Services</h3>
          <hr />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>

        {/* Right side: Social media icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons" >
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img style={{borderRadius:'14px'}}src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img style={{borderRadius:'14px'}}src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img style={{borderRadius:'14px'}}src={twitter} alt="Twitter" className="social-icon" />
            </a>
          </div>

          {/* Buttons under social icons */}
          <div className="footer-buttons">
            <Link to="/help">
              <button className="footer-button">Help</button>
            </Link>
            <Link to="/contact">
              <button className="footer-button">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
