import React, { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductSlider from "../components/ProductSlider";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";

import OfferBanner from "../components/OfferBanner";

import Advertisement from "../components/Advertisement";
import QualitySection from "../components/QualitySection";
import SeoFooterText from "../components/SeoFooterText";

const Home = () => {
  
  const offerBannerRef = useRef(null);
  
     
  return (
    <div>
        
        <HeroSection offerBannerRef={offerBannerRef} />
        <div className="block-middle">
        <ProductSlider  />
        {/* <Advertisement /> */}
        </div>
        <div ref={offerBannerRef}>
          <OfferBanner />
        </div>
        <WhyChooseUs />
        <HowItWorks />
        <ContactForm  />
        <QualitySection />
        <SeoFooterText />
        
    </div>
  )
}

export default Home
