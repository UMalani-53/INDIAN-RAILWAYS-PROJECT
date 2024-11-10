import React, { useRef } from 'react';
import Navbar from './pages/Navbar'; // Adjust path as necessary
import Home from './pages/Home';     // Adjust path as necessary
import Services from './pages/Services'; // Adjust path as necessary
import About from './pages/About';  // Adjust path as necessary
import Contact from './pages/Contact'; // Adjust path as necessary
import Help from './pages/Help';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './pages/Footer1';
import Zones from './pages/Zones';
import IndianRoutes from './pages/Routes';
import Booking from './pages/Booking';

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <div>
        <Navbar
          homeRef={homeRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />

        {/* Main content sections (Home, Services, About) */}
        {/* These are part of the root path (/) */}
        <Routes>
          {/* Default Route for the home page */}
          <Route path="/" element={
            <div>
              <div ref={homeRef}><Home /></div>
              <div ref={servicesRef}><Services /></div>
              <div ref={aboutRef}><About /></div>
            </div>
          } />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/Zones" element={<Zones />} />
          <Route path="/routes" element={<IndianRoutes />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
