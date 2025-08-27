import React from "react";
import "../styles/howitworks.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  { icon: "/assets/icons/2 (2).png", title: "Choose a Product", desc: "Browse our wide range of promotional items." },
  { icon: "/assets/icons/2 (1).png", title: "Customize", desc: "Add your branding, logo, or message." },
  { icon: "/assets/icons/2 (4).png", title: "Approve Design", desc: "Review and confirm the final look before production." },
  { icon: "/assets/icons/2 (3).png", title: "Get Delivered", desc: "Receive your customized products at your doorstep." }
];

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const HowItWorks = () => {
  const isSmallScreen =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="subtitle">A simple process to get your customized promotional products.</p>
      <div className="steps">
        {steps.map((step, idx) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            <div className="step" key={idx}>
              <motion.div
                ref={ref}
                initial={isSmallScreen ? undefined : "hidden"}
                animate={isSmallScreen ? undefined : inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="animated-section"
              >
                <img src={step.icon} alt={`${step.title} icon`} className="icon-obj" />
                <h3>{step.title}</h3> {/* Changed h4 → h3 */}
                <p>{step.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
