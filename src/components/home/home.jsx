import React from "react";
import { connect } from "react-redux";
import HeroSection from "../hero-section/HeroSection";

import { CountUpStats } from "../stats/Stats";
import SlidePricing from "../price-cards/PriceCards";
import FooterWithSocialLinks from "../footer/Footer";

/**
 * COMPONENT
 */
export const Home = (props) => {
  return (
    <div>
      <HeroSection />

      <div>
        <CountUpStats />
      </div>
      <div>
        <SlidePricing />
      </div>
      <div>
        <FooterWithSocialLinks />
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
