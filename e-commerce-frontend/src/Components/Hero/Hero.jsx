import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Grow with Us</h2>
        <div>
          <p>Seasonal Products</p>
          <p>For All Crops</p>
        </div>
        <div className="hero-latest-btn">
          <div>New Products</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
