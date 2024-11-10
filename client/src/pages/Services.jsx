import React from 'react';
import '../styles/services.css'; // Make sure to link the CSS file for styling
import zonesImage from '../assets/Zonesimage.jpeg';  // Replace with the correct image path
import routesImage from '../assets/routes.jpeg';  // Replace with the correct image path
import bookingImage from '../assets/bookin.jpeg';  // Replace with the correct image path
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title" style={{ textDecoration: 'underline' }}>Our Services</h1>


      <div className="services-list">
        <Link to='/Zones' style={{textDecoration:'none'}} className="service-item">
          <img src={zonesImage} alt="Zones" className="service-image" />
          <h2 className="service-name">Zones</h2>
        </Link>
        <Link to='/routes'style={{textDecoration:'none'}}  className="service-item">
          <img src={routesImage} alt="Routes" className="service-image" />
          <h2 className="service-name">Routes</h2>
        </Link>
        <Link to='/booking' style={{textDecoration:'none'}} className="service-item">
          <img src={bookingImage} alt="Booking" className="service-image" />
          <h2 className="service-name">Booking</h2>
        </Link>
      </div>
    </div>
  );
}

export default Services;
