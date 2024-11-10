import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './booking-1.css';

export default function Component() {
    const [bookingData, setBookingData] = useState({
        from: '',
        to: '',
        date: '',
    });

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
        // Here you would typically send the data to a server to check availability
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
            <div className="booking-container">
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
                        <Link to="/booking2"><button type="submit" className="submit-button">Check Availability</button></Link>
                    </form>
                </div>
            </div>
        
        </div>
    );
}
