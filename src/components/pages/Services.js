import React from "react";
import "../../App.css";
import ServicesTop from "../ServicesTop";
import ProgramRequirements from "../ProgramRequirements";

const Services = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <ServicesTop />
      <ProgramRequirements />
    </div>
  );
};

export default Services;
