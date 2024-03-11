import React from "react";
import { Parallax } from "react-parallax";
import Pencils from "../images/jess-bailey-l3N9Q27zULw-unsplash.jpg";
import { LearnMoreButton } from "./LearnMoreButton";
import "../App.css";
import "./HomeLowerSection.css";

const HomeLowerSection = () => {
  return (
    <div className="lower-page">
      <Parallax className="lower-container" bgImage={Pencils} strength={200}>
        <div className="lower-content">
          <h1 className="img-text">Our Services</h1>
          <br />
          <ul className='lower-list'>
            <li className='lower-list-item'>One Day Service or half day service</li>
            <li className='lower-list-item'>Training with Ongoing Shadowing offered</li>
            <li className='lower-list-item'>Materials Provided</li>
            <li className='lower-list-item'>Consulting</li>
          </ul>
          <br />
          <LearnMoreButton className="lower-button" buttonStyle="btn--outline">Click To Learn More</LearnMoreButton>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeLowerSection;
