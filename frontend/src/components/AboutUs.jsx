// AboutUs.jsx
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="about-title">About Our Company</h2>
        <p className="about-subtitle">Delivering excellence since 2010</p>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image"></div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              We are a team of passionate designers and developers dedicated to creating 
              innovative solutions for our clients. With over a decade of experience, we've 
              helped thousands of businesses transform their digital presence.
            </p>
            
            <div className="about-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
            
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;