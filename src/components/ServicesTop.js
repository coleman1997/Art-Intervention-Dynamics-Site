import React from "react";
import ServiceImg from "../images/pawel-czerwinski-OG44d93iNJk-unsplash.jpg";
import { Parallax } from "react-parallax";
import "./ServicesTop.css";
import "../App.css";

const ServicesTop = () => {
  return (
    <div className="services-page">
      <Parallax
        className="services-container"
        bgImage={ServiceImg}
        strength={200}
      >
        <div className="services-content">
          <h1 className="services-img-text">
            One Day Service/ Training with Ongoing Training and Shadowing
          </h1>
          <br />
          <p className="services-img-text-p">
            Book an 8 hour day of on-site consulting and training
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default ServicesTop;
