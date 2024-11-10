import React from 'react';
import '../styles/About.css';  // Make sure to link the correct CSS file for styling
import railwaysImage from '../assets/indian-railways.jpeg';  // Replace with the correct image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={railwaysImage} alt="Indian Railways" className="railways-image" />
        </div>
        <div className="about-description">
          <h1>About Indian Railways</h1>
          <p>
            Indian Railways is one of the largest and busiest rail networks in the world. 
            It is the backbone of transportation in India, connecting cities, towns, and rural areas. 
            The system operates over 67,000 kilometers of track, covering more than 7,000 stations, 
            and serves millions of passengers every day. With a history dating back to 1853, 
            Indian Railways continues to evolve with modern technology, providing safe, efficient, and 
            affordable travel for people across the country.
          </p>
          <p>
            The Indian Railways plays a vital role in the economic development of India, offering 
            freight services for various industries. It is an integral part of the Indian culture, 
            connecting diverse regions and people from all walks of life. With a focus on sustainability 
            and modernization, Indian Railways continues to improve its infrastructure, 
            introducing high-speed trains, new stations, and advanced safety measures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
