import React from 'react';
import "../styles/QualitySection.css";

const BrandingSolutions = () => {
  return (
    <section className="branding-solutions-section" aria-labelledby="branding-solutions-heading">
      <div className="branding-solutions-container">
        
        <header className="branding-solutions-header">
          <h2 id="branding-solutions-heading" className="branding-solutions-title">
            Tailored Branding Solutions for Coaching Institutes
          </h2>
          <p className="branding-solutions-lead">
            Every coaching institute is unique, and so are its branding needs. At CoachingPromo, we provide custom promotional products for coaching institutes that help you leave a lasting impression on students, staff, and visitors.
          </p>
        </header>
        
        <div className="branding-solutions-grid">
          
          <div className="branding-solution-card">
            <div className="branding-solution-icon">🎁</div>
            <h3 className="branding-solution-heading">Student Welcome Kits</h3>
            <p className="branding-solution-text">
              Make new batches feel special with branded notebooks, pens, and bags designed exclusively for your students.
            </p>
          </div>
          
          <div className="branding-solution-card">
            <div className="branding-solution-icon">👕</div>
            <h3 className="branding-solution-heading">Staff Apparel</h3>
            <p className="branding-solution-text">
              Create a professional look with custom polo T-shirts, formal shirts, and jackets featuring your institute logo. Perfect for staff uniforms and event appearances.
            </p>
          </div>
          
          <div className="branding-solution-card">
            <div className="branding-solution-icon">🎉</div>
            <h3 className="branding-solution-heading">Event Giveaways</h3>
            <p className="branding-solution-text">
              Boost engagement during events with custom mugs, water bottles, sippers, lanyards, and keychains that attendees will actually use.
            </p>
          </div>
          
          <div className="branding-solution-card">
            <div className="branding-solution-icon">🎓</div>
            <h3 className="branding-solution-heading">Graduation Kits</h3>
            <p className="branding-solution-text">
              Celebrate milestones with branded caps, gowns, stoles, and certificates, ensuring students remember your institute fondly.
            </p>
          </div>
        </div>
        
        <div className="branding-benefits-section">
          <h3 className="branding-benefits-title">Key Benefits</h3>
          <ul className="branding-benefits-list">
            <li className="branding-benefit-item">Enhances reputation</li>
            <li className="branding-benefit-item">Builds trust</li>
            <li className="branding-benefit-item">Increases student engagement</li>
            <li className="branding-benefit-item">Creates a sense of belonging</li>
            <li className="branding-benefit-item">Boosts visibility</li>
            <li className="branding-benefit-item">Encourages word-of-mouth referrals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrandingSolutions;
