import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductSlider from "../components/ProductSlider";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";
import OfferBanner from "../components/OfferBanner";
import QualitySection from "../components/QualitySection";
import SeoFooterText from "../components/SeoFooterText";
import Content from "../components/Content";

const Home = () => {
  const offerBannerRef = useRef(null);

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Corporate Gifting Solutions | Coaching Promo</title>
        <meta
          name="description"
          content="Discover premium corporate gifting solutions at Coaching Promo. Customize t-shirts, polos, caps, and more for employees, clients, and events with high-quality printing."
        />
        <link rel="canonical" href="https://coachingpromo.in/" />
      </Helmet>

      <HeroSection offerBannerRef={offerBannerRef} />
      <div className="block-middle">
        <ProductSlider />
      </div>
      <div ref={offerBannerRef}>
        <OfferBanner />
      </div>
      <WhyChooseUs />
      <HowItWorks />
      <ContactForm />
      <QualitySection />
      <Content />
      <SeoFooterText />
    </div>
  );
};

export default Home;
