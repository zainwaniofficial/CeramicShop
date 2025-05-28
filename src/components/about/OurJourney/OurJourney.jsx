import React from "react";
import "./OurJourney.css";

const OurJourney = () => {
  return (
    <div className="journey-wrapper">
      <div className="journey-image-top">
        <img src="/images/our-story.jpg" alt="Our Story" />
      </div>

      <div className="journey-content-block">
        <img
          className="journey-side-img"
          src="/images/our-journey.jpg"
          alt="Our Journey"
        />
        <div className="journey-text">
          <h6>OUR JOURNEY</h6>
          <h2>Our Ceramic Odyssey Crafting Beauty and Quality.</h2>
          <p>
            Our company story is a testament to the enduring love for
            craftsmanship, where we combine our passion for ceramics with an
            unwavering commitment to quality and timeless beauty. Explore the
            journey that has led us to become a trusted source for exquisite
            ceramic products. We're proud to share our story, which mirrors the
            growth of a dream into a thriving destination for exceptional
            creations, reflecting artistry and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
