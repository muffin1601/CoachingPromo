import React, { useState, useEffect } from "react";
import "../styles/Advertisement.css";

const ads = [
  {
    headline: "Unlock Your Success with Expert Coaching",
    tagline: "Personalized courses designed to help you achieve your dreams.",
  },
  {
    headline: "Crack Competitive Exams Faster!",
    tagline: "Proven strategies & practice tests at your fingertips.",
  },
  {
    headline: "Master Skills That Employers Want",
    tagline: "Industry-focused training to boost your career prospects.",
  },
  {
    headline: "Study Smarter, Not Harder",
    tagline: "Join thousands who’ve improved their scores with us.",
  },
  {
    headline: "Your Dream Job Starts Here",
    tagline: "Comprehensive coaching + placement assistance included.",
  },
  {
    headline: "Learn Anytime, Anywhere",
    tagline: "Flexible online courses tailored to your schedule.",
  },
  {
    headline: "Affordable Coaching, Premium Results",
    tagline: "Quality education that doesn’t break the bank.",
  },
  {
    headline: "Stay Ahead with Our Exclusive Study Material",
    tagline: "Updated content crafted by top educators.",
  },
  {
    headline: "Boost Confidence with Live Doubt Clearing Sessions",
    tagline: "Interactive classes to keep you on track.",
  },
  {
    headline: "Join the Best Coaching Community Today",
    tagline: "Collaborative learning, mentoring & career growth.",
  },
  {
    headline: "Score Higher with Mock Tests & Analytics",
    tagline: "Identify your strengths and improve weaknesses fast.",
  },
  {
    headline: "Expert Mentors Guiding You Every Step",
    tagline: "Personal attention for guaranteed success.",
  },
  {
    headline: "From Basics to Advanced – All Courses Available",
    tagline: "Choose your path, and we’ll guide you through.",
  },
  {
    headline: "Limited Time Offer: Get 20% Off on New Enrollments",
    tagline: "Quality coaching at a discounted price – enroll now!",
  },
  {
    headline: "Transform Your Future with CoachingPromo",
    tagline: "Proven results, expert guidance, and your success story.",
  },
];

const Advertisement = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 6000); // change ad every 6 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { headline, tagline } = ads[currentAdIndex];

  return (
    <section className="ad-banner">
      <div className="ad-content">
        <h2 className="ad-title">{headline}</h2>

        <p className="ad-subtitle">{tagline}</p>

        <p className="ad-text">
          Thousands of students have transformed their lives with CoachingPromo.
          Join us today to take the first step towards your dream career.
        </p>

        <a
          href="#"
          className="ad-cta-button"
          aria-label="Get started with CoachingPromo"
        >
          Get Started Now
        </a>
      </div>

      <div className="ad-image-container" aria-hidden="true">
        <img
          src="https://coachingpromo.in/assets/promo-banner.jpg"
          alt="Coaching Promo Banner"
          className="ad-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Advertisement;
