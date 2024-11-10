import React, { useState } from 'react';
import './booking-2.css';
import { Link } from 'react-router-dom';


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const trains = [
    { name: "Express 123", departure: "10:00 AM", arrival: "4:00 PM", duration: "6h 00m", class: "Sleeper", fare: "$25", status: "Available" },
    { name: "Superfast 456", departure: "2:30 PM", arrival: "9:45 PM", duration: "7h 15m", class: "AC", fare: "$40", status: "Waiting" },
    { name: "Night Rider 789", departure: "11:00 PM", arrival: "7:00 AM", duration: "8h 00m", class: "AC", fare: "$35", status: "Unavailable" },
  ];

  const filteredTrains = trains.filter(train =>
    train.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checking availability:', bookingData);
    alert('Checking availability for the selected route and date.');
  };

  return (
    <div className="page-container">
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
        {/* <div className="booking-container">
          <div className="booking-form">
            <h2>Check Train Availability</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from">From</label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    value={bookingData.from}
                    onChange={handleChange}
                    required
                    placeholder="Enter Departure station"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="to">To</label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    value={bookingData.to}
                    onChange={handleChange}
                    required
                    placeholder="Enter Arrival station"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date of Journey</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Check Availability</button>
            </form>
          </div>
        </div> */}

        <section className="available-trains">
          <h2>Available Trains</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search trains..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="table-container">
            <table className="train-table">
              <thead>
                <tr>
                  <th>Train Name</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Duration</th>
                  <th>Class</th>
                  <th>Fare</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrains.map((train, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <td>{train.name}</td>
                    <td>{train.departure}</td>
                    <td>{train.arrival}</td>
                    <td>{train.duration}</td>
                    <td>{train.class}</td>
                    <td>{train.fare}</td>
                    <td><span className={`status ${train.status.toLowerCase()}`}>{train.status}</span></td>
                    <td>
                      <Link to='/booking3'><button className="select-button" disabled={train.status === "Unavailable"}>
                        Select
                      </button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
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