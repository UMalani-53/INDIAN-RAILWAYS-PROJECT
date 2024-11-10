import React, { useState } from 'react';
import './TrainRoutes.css';
import { Link } from 'react-router-dom';

const TrainDetails = () => {
  // This would typically come from an API or props
  const trainDetails = {
    id: "EXP123",
    name: "Express 123",
    origin: "New York",
    destination: "Los Angeles",
    departureTime: "08:00 AM",
    arrivalTime: "11:00 PM",
    date: "2024-07-15",
    status: "On Time",
    stations: [
      { name: "New York", departureTime: "08:00 AM", arrivalTime: "-" },
      { name: "Philadelphia", arrivalTime: "09:30 AM", departureTime: "09:35 AM" },
      { name: "Washington D.C.", arrivalTime: "11:00 AM", departureTime: "11:10 AM" },
      { name: "Chicago", arrivalTime: "03:00 PM", departureTime: "03:15 PM" },
      { name: "Denver", arrivalTime: "07:00 PM", departureTime: "07:10 PM" },
      { name: "Los Angeles", arrivalTime: "11:00 PM", departureTime: "-" },
    ]
  };

  return (
    <div className="train-details-page">
            <header className="site-header">
        <div className="header-content">
          <div className="logo-title">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Indian_Railways.svg/120px-Indian_Railways.svg.png" alt="Indian Railways Logo" className="logo" />
            <h1 className="site-title">Indian Railways</h1>
          </div>
          <nav className="site-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#schedules">Schedules</a></li>
              <li><a href="#fares">Fares</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="card">
          <div className="card-header">
            <h2>{trainDetails.name} Details</h2>
            <span className={`status ${trainDetails.status.toLowerCase().replace(' ', '-')}`}>
              {trainDetails.status}
            </span>
          </div>
          <div className="card-content">
            <div className="journey-details">
              <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                <span className="label">From:</span> {trainDetails.origin}
              </div>
              <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                <span className="label">To:</span> {trainDetails.destination}
              </div>
              <div className="detail">
                <i className="fas fa-clock"></i>
                <span className="label">Departure:</span> {trainDetails.departureTime}
              </div>
              <div className="detail">
                <i className="fas fa-clock"></i>
                <span className="label">Arrival:</span> {trainDetails.arrivalTime}
              </div>
              <div className="detail">
                <i className="fas fa-calendar-alt"></i>
                <span className="label">Date:</span> {trainDetails.date}
              </div>
            </div>
            
            <h3>Route Details</h3>
            <table className="route-table">
              <thead>
                <tr>
                  <th>Station</th>
                  <th>Arrival</th>
                  <th>Departure</th>
                </tr>
              </thead>
              <tbody>
                {trainDetails.stations.map((station, index) => (
                  <tr key={index}>
                    <td>{station.name}</td>
                    <td>{station.arrivalTime}</td>
                    <td>{station.departureTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn btn-secondary">Back to Search</button>
          <button className="btn btn-primary">Book This Train</button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide efficient and comfortable railway services across the country.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@railwaybooking.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 Railway Booking System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TrainDetails;