// AboutUs.jsx
import React , {useState} from 'react';
import '../styles/AboutUs.css';


const AboutUs = () => {


  return (
   
      <section className="about-us">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">Your One-Stop Shop for Institute Promotional Items</p>

          <div className="about-content">
            <div className="about-image-container">
              <img src='/assets/about.png' className="about-image"></img>
            </div>

            <div className="about-text">
              <p className="about-description">
                We specializes in providing high-quality promotional items tailored for educational institutes. 
                From branded stationery and bags to customized apparel and event kits, we help institutes enhance their brand presence and create lasting impressions among students and staff.
                Our platform makes it easy for institutes to browse, customize, and order promotional products that fit their unique needs and budget.
              </p>

              <div className="about-stats">
                <div className="stat-card">
                  <h3>500+</h3>
                  <p>Products Available</p>
                </div>
                <div className="stat-card">
                  <h3>200+</h3>
                  <p>Institutes Served</p>
                </div>
                <div className="stat-card">
                  <h3>100%</h3>
                  <p>Customization Guaranteed</p>
                </div>
              </div>

              <button className="learn-more-btn" onClick={() => window.location.href = `/home`}>Browse Products</button>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default AboutUs;