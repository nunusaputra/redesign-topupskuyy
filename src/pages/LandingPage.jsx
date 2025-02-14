import React from "react";
import HeroBanner from "../components/HeroBanner";
import Promo from "../components/Promo";
import Popular from "../components/Popular";
import MainContent from "../components/MainContent";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />
      {/* Promo Content */}
      <Promo />
      {/* Popular Topup */}
      <Popular />
      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default LandingPage;
