import { useRef } from "react";

const useScrollRefs = () => {
  const apparelRef = useRef(null);
  const bagsRef = useRef(null);
  const stationaryRef = useRef(null);
  const trophyRef = useRef(null);
  const promotionalkitsRef = useRef(null);
  const contactRef = useRef(null);
  
    const scrolltoContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

  const scrolltoApparel = () => {
    apparelRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoBags = () => {
    bagsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoStationary = () => {
    stationaryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoTrophy = () => {
    trophyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoPromotionalkits = () => {
    promotionalkitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    apparelRef,
    bagsRef,
    stationaryRef,
    trophyRef,
    promotionalkitsRef,
    contactRef,
    scrolltoContact,
    scrolltoApparel,
    scrolltoBags,
    scrolltoStationary,
    scrolltoTrophy,
    scrolltoPromotionalkits,
  };
};

export default useScrollRefs;
