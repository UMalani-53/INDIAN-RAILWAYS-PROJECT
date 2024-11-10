import React, { useState } from 'react';
import './booking-3.css'

export default function BookingDetails() {
  const [selectedSeat, setSelectedSeat] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [passengerAge, setPassengerAge] = useState('');
  const [passengerGender, setPassengerGender] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedSeat && passengerName && passengerAge && passengerGender && agreedToTerms) {
      console.log('Form submitted');
      alert('Proceeding to payment...');
    } else {
      alert('Please fill in all fields and agree to the terms and conditions.');
    }
  };

  return (
    <div className="booking-details-container">
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

      <main className="booking-main">
        <form onSubmit={handleSubmit}>
          <div className="booking-card passenger-details">
            <h2 className="card-title">
              <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Select Seats and Enter Passenger Details
            </h2>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="seat">Select Seat</label>
                <select
                  id="seat"
                  value={selectedSeat}
                  onChange={(e) => setSelectedSeat(e.target.value)}
                  required
                >
                  <option value="">Choose your seat</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Passenger Name</label>
                <input
                  id="name"
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  value={passengerAge}
                  onChange={(e) => setPassengerAge(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={passengerGender}
                  onChange={(e) => setPassengerGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="booking-card booking-review">
            <h2 className="card-title">
              <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              Review Your Booking
            </h2>
            <div className="card-content">
              <p><strong>Train:</strong> Express 123</p>
              <p><strong>Date:</strong> July 15, 2024</p>
              <p><strong>Departure:</strong> 10:00 AM</p>
              <p><strong>Arrival:</strong> 4:00 PM</p>
              <p><strong>Seat:</strong> {selectedSeat || 'Not selected'}</p>
              <p><strong>Passenger:</strong> {passengerName || 'Not provided'}</p>
              <p><strong>Total Fare:</strong> $120</p>
            </div>
          </div>

          <div className="action-buttons">
            <button type="button" className="secondary-button">
              <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Ticket
            </button>
            <button type="button" className="secondary-button">
              <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Ticket
            </button>
          </div>

          <div className="terms-agreement">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="primary-button">
            Proceed to Payment
          </button>
        </form>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about" style={{marginLeft:20}}>
            <h3>About Us</h3>
            <p>We provide efficient and comfortable railway services across the country.</p>
          </div>
          <div className="footer-section links" style={{paddingLeft:100,marginLeft:20}}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> Email: info@indianrailways.com</p>
            <p><i className="fas fa-phone"></i> Phone: +91 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Indian Railways. All rights reserved.</p>
        </div>
      </footer>

      
    </div>
  );
}