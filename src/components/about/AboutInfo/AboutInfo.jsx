import React from "react";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="about-wrapper">
      <div className="about-section">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to the world of CeramicShop, where artistry and innovation
            come together to craft stunning ceramic pieces. Discover our story,
            the passion that drives us, and our commitment to delivering
            timeless beauty and quality.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about-03.jpg" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
