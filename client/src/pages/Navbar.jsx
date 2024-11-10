import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import logo from '../assets/logo.jpg';
import search from '../assets/search.png';
import dots from '../assets/dots.jpeg';

const Navbar = ({ homeRef, servicesRef, aboutRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll handler for sidebar items
  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false); // Close sidebar when a link is clicked
  };

  return (
    <div>
      <div className='nav-content'>
        <div className="nav-left">
          <nav className="navbar">
            <button
              className="navbar-toggler"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <div className="dots">
                <img src={dots} alt="" />
              </div>
            </button>
          </nav>
          <img src={logo} alt="Logo" />
        </div>

        {/* Centered Search Bar */}
        <div className="nav-center">
          <div className="search">
            <input type="text" placeholder='Search here..' />
            <img src={search} alt="Search" style={{ height: 40, cursor: 'pointer' }} />
          </div>
        </div>

        {/* Login link at the right */}
        <div className="nav-right">
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      {/* Sidebar for navigation */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h1 id='h1'>Indian Railways</h1>
        <ul className="sidebar-nav">
          <li className='li'>
            <Link style={{color:'white'}} to='/'  onClick={() => handleScrollToSection(homeRef)}>Home</Link>
          </li>
          <li className='li'>
            <Link to='/' style={{color:'white'}}onClick={() => handleScrollToSection(servicesRef)}>Services</Link>
          </li>
          <li className='li'>
            <Link to='/' style={{color:'white'}}onClick={() => handleScrollToSection(aboutRef)}>About</Link>
          </li>
          <li className='li'>
            <div>Logout</div>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
