import React from "react";
import "../styles/whychooseus.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  // Disable animation on small screens
  const isSmallScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { title: "Premium Quality", desc: "Top-notch materials and printing for lasting impressions." },
    { title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
    { title: "Bulk Order Discounts", desc: "Special pricing for large quantities to save your costs." },
    { title: "Customization", desc: "Personalized designs to reflect your brand identity." },
    { title: "On-Time Delivery", desc: "Reliable service ensuring prompt product delivery." },
    { title: "Eco-Friendly Products", desc: "Environmentally conscious materials for a sustainable future." },
    { title: "Expert Support", desc: "Dedicated team to assist you at every step of the process." },
    { title: "Wide Range of Products", desc: "Extensive selection to meet all your promotional needs." }
  ];

  return (
    <section className="why-choose-us">
      <h2 className="heading">Why Choose Us?</h2>
      <p className="subtitle">
        We provide high-quality promotional products tailored to your coaching institute’s needs.
      </p>
      <div className="benefits">
        {benefits.map((item, idx) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <div className="benefit" key={idx}>
              <motion.div
                ref={ref}
                // Disable animation completely on small screen by setting no initial or animate props
                initial={isSmallScreen ? undefined : "hidden"}
                animate={isSmallScreen ? undefined : (inView ? "visible" : "hidden")}
                variants={variants}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="animated-section"
              >
                <FaCheckCircle className="icon-check" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
