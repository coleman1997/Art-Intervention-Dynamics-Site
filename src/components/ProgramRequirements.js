import React from "react";
import "../App.css";
import "./ProgramRequirements.css";

const ProgramRequirements = () => {
  return (
    <div className="program-page">
      <div className="program-container">
        <div className="program-content">
          <h1>Program Requirements</h1>
          <br />
          <h3>
            For this program to be effective, the requirements below are needed
          </h3>
          <br />
          <ul className="require-list">
            <li>Our program works with ages 7 to adulthood</li>
            <li>A self-contained room with a group of peers is needed</li>
            <li>
              A.I.D. is implemented for one hour twice a week during regular
              school weeks
            </li>
            <li>Consistency in location of sessions is needed</li>
          </ul>
          <br />
          <h1>What to expect</h1>
          <br />
          <h3>Art Intervention Dynamics offers:</h3>
          <br />
          <ul className="require-list">
            <li>
              A presentation of our original and research supported curriculum
            </li>
            <li>All materials needed to start the program</li>
            <li>Expertise in the field</li>
            <li>Staff training</li>
            <li>Ongoing support and training as needed</li>
          </ul>
          <br />
          <h3>
            An introductory one-day service is needed. This can be 4-8 hours of
            service depending on client’s availability.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProgramRequirements;
