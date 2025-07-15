import React from "react";
import { ShieldCheck, Gem, Brush } from "lucide-react";
import "../styles/QualitySection.css"; // Import the custom CSS

const QualitySection = () => {
  return (
    <section className="quality-section">
      <div className="quality-container">
        <h2 className="quality-title">
          🔒 Quality You Can Trust
        </h2>
        <p className="quality-subtitle">
          Our commitment is to excellence. We use top-grade materials and modern printing techniques to ensure your institute’s branding looks sharp and lasts long.
        </p>

        <div className="quality-grid">
          <div className="quality-item">
            <Gem className="quality-icon blue" />
            <h3>Premium Materials</h3>
            <p>Only top-grade fabrics and components used.</p>
          </div>
          <div className="quality-item">
            <ShieldCheck className="quality-icon green" />
            <h3>High Durability</h3>
            <p>Products designed to last in everyday use.</p>
          </div>
          <div className="quality-item">
            <Brush className="quality-icon purple" />
            <h3>Sharp Printing</h3>
            <p>Modern techniques for crisp and lasting prints.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
