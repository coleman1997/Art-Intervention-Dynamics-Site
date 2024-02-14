import React from "react";
import ClassRoom from "../images/pawel-czerwinski-OG44d93iNJk-unsplash.jpg";
import { Parallax } from "react-parallax";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="page">
      <Parallax className="hero-container" bgImage={ClassRoom} strength={300}>
        <div className="hero-content">
          <h1 className="hero-img-text">Special Education Consulting</h1>
          <br />
          <p className="img-text-p">Innovative Learning, Lasting Change</p>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
