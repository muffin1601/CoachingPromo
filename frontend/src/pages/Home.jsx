import React, { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductSlider from "../components/ProductSlider";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import OfferBanner from "../components/OfferBanner";
import SearchOverlay from "../components/SearchOverlay";
import Advertisement from "../components/Advertisement";
import QualitySection from "../components/QualitySection";
import SeoFooterText from "../components/SeoFooterText";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const offerBannerRef = useRef(null);
  const toggleSearch = () => setShowSearch(!showSearch);
     
  return (
    <div>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} toggleSearch={toggleSearch} />
          {showSearch && (
            <SearchOverlay showSearch={showSearch} toggleSearch={toggleSearch} />
          )}
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
        <Footer />
    </div>
  )
}

export default Home
