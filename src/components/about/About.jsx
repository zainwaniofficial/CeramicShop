import "./about.css";
import React from "react";
import Cta from "./Cta";

import AboutInfo from "./AboutInfo/AboutInfo";
import AboutStory from "./AboutStory/AboutStory";
// import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <AboutInfo />
      <AboutStory />

      <div className="visiongoals">
        <div className="our-vision">
          <h3>Our Vision</h3>
          <p>
            Our vision is to infuse every home with the timeless beauty and
            functionality of ceramics. We are dedicated to creating elegant,
            handcrafted ceramic pieces that elevate everyday living, whether
            it's enjoying a meal, decorating a space, or finding the perfect
            gift. Our mission is to inspire and bring artistry into daily life,
            providing a canvas of creativity through ceramics.
          </p>
        </div>
        <div className="our-goal">
          <h3>Our Goals</h3>
          <p>
            Our values are the foundation upon which Your Ceramicis built. We
            prioritize craftsmanship, quality, and creativity in all that we do.
            Integrity, authenticity, and sustainability are at the core of our
            values, ensuring that our products reflect not just beauty, but also
            ethical and environmental responsibility. We believe in the power of
            ceramics to connect people, transform spaces, and create lasting
            memories.{" "}
          </p>
        </div>
      </div>

      <Cta />
    </>
  );
};

export default About;
