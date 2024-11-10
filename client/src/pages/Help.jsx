import React, { useState } from 'react';
import '../styles/Help.css'; // Make sure to create a CSS file for styling

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track which question is active
  const faqs = [
    {
      question: "What is the booking process for Indian Railways?",
      answer: "You can book tickets online through the IRCTC website or mobile app, or at ticket counters at the station."
    },
    {
      question: "How can I track my train's status?",
      answer: "You can track the live status of your train on the Indian Railways website or mobile app by entering the train number or station name."
    },
    {
      question: "What should I do if my train is delayed?",
      answer: "If your train is delayed, you can check the updated schedule on the official website or IRCTC app. In case of extreme delays, you may be eligible for compensation."
    },
    {
      question: "How can I cancel my train ticket?",
      answer: "You can cancel your train ticket online through the IRCTC website or mobile app, or visit the station ticket counter for cancellations."
    },
    {
      question: "What is the luggage limit for Indian Railways?",
      answer: "The luggage limit for passengers varies depending on the class of travel. Generally, passengers are allowed 35kg in AC classes and 40kg in non-AC classes."
    },
    // New questions and answers
    {
      question: "How can I book a tatkal ticket?",
      answer: "Tatkal tickets can be booked online through the IRCTC website or app, one day before the journey date. The booking opens at 10 AM for AC classes and 11 AM for sleeper class."
    },
    {
      question: "What is the difference between a Superfast and Express train?",
      answer: "Superfast trains are faster than regular Express trains. They have fewer stops and cover long distances quickly. They charge a slightly higher fare due to the speed."
    },
    {
      question: "Can I change my train booking after confirming?",
      answer: "Once a train ticket is confirmed, you can only change the date, train, or class of travel by canceling the ticket and rebooking. However, this depends on the train and availability."
    },
    {
      question: "What is the refund policy for train tickets?",
      answer: "Refunds are processed if you cancel your ticket before the scheduled departure. There is a cancellation fee that depends on the time of cancellation. Refunds are available for both online and offline bookings."
    },
    {
      question: "Can I carry food and drinks on the train?",
      answer: "Yes, passengers can carry food and drinks on the train. However, if you are traveling in AC classes, food will be provided at the time of booking. On some trains, pantry services are also available."
    },
    {
      question: "What is the procedure for requesting a wheelchair on the train?",
      answer: "You can request a wheelchair at the time of booking through the IRCTC website or mobile app. It can also be arranged at the station, but it’s better to make a prior request."
    },
    {
      question: "Are there any special facilities for senior citizens?",
      answer: "Yes, senior citizens are provided with a concession on train tickets. They are also given priority seating in trains and stations."
    },
    {
      question: "Can I travel with my pet on a train?",
      answer: "Yes, you can travel with your pet on most trains in the designated pet compartment. Prior booking and an additional charge may apply."
    },
    {
      question: "What should I do if I lose my ticket?",
      answer: "If you lose your train ticket, you can request a duplicate ticket at the railway station before departure, but this may be subject to conditions. You can also provide your PNR number for assistance."
    }
  ];
  
  // Toggle the FAQ item when clicked
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <div className="help-container">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
