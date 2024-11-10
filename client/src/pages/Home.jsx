import React, { useState, useRef } from 'react';
import '../styles/Home.css'; // Ensure correct path
import video from '../assets/video1.webm'; // Replace with your video source

const Home = () => {
  const [quote, setQuote] = useState("");  // State to store typed quote
  const videoRef = useRef(null);

  // The quote you want to type out
  const fullQuote = "Inndian Railways: The lifeline of the nation."+"                                                                                                                                                                                                                                                                                                                                                                         ";

  // Event handler when the video ends
  const handleVideoEnd = () => {
    setTimeout(() => {
      startTypingEffect();  // Start typing effect after video ends
    }, 1000);  // 1-second delay before the quote appears
  };

  // Function to create the typing effect
  const startTypingEffect = () => {
    let i = 0;
    setQuote(""); // Reset quote to an empty string before starting typing effect
    
    const interval = setInterval(() => {
      // Make sure we do not exceed the length of the fullQuote
      if (i < fullQuote.length) {
        setQuote((prevQuote) => prevQuote + fullQuote[i]);
        i++;
      } else {
        clearInterval(interval); // Stop typing once the quote is fully typed
      }
    }, 100); // Adjust speed here (in milliseconds)
  };

  return (
    <div className="home-container">
      {/* Video Header */}
      <div className="video-header">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          onEnded={handleVideoEnd}  // Trigger quote typing after the video ends
          className="video-background"
        />
      </div>

      {/* Quote that types out letter by letter */}
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
      </div>
    </div>
  );
};

export default Home;
