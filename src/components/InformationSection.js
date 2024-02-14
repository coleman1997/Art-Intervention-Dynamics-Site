import React from "react";
import "../App.css";
import "./InformationSection.css";

const InformationSection = () => {
  return (
    <div className="information-container">
      <div className="information-content">
        <h1>We are unlocking their desire to learn</h1>
        <br />
        <h3>
          {" "}
          There is a great need for more effective learning strategies in the
          Special Education System. With a teacher shortage, overwhelmed
          teachers, and students with maladaptive behaviors due to a lack of not
          being able to communicate... we, as a society, need help and fast.
        </h3>
        <br />
        <p>
          In all Special Education schools or organizations, there are typically
          only one on one instruction learning strategies and they are
          inadequate when it comes to improving language, focus and behavior.
          They only offer extrinsic reward strategies (or token systems) which
          have to always be provided in order to get a child or young adult to
          do what is asked of them or to improve their learning. The individual
          with special needs has no inner motivation to improve or grow in
          learning...thereby resulting in poor performance or progression.
        </p>
        <br />
        <p>
          Art Intervention Dynamics offers peer group learning strategies that
          improve language, focus, and behavior in a short amount of time. Our
          strategy is unique because it offers a method that helps students
          learn because they want to learn. It produces intrinsic rewards and
          unlocks their desire to communicate. They want to learn and grow
          because for the first time, they are being heard by peers and adults
          without being told what to do. Nearly every student I've taught this
          to becomes "social butterflies". It's like watching them blossom and
          communicate for the first time.
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
