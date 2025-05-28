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
      <div className="ourjourney">
        <div className="ourjourney-1">
          <img src="/images/our-story.jpg" alt="" />
        </div>
        <div className="ourjourney-2">
          <img className="journey2-img" src="/images/our-journey.jpg" alt="" />

          <div>
            <h6>OUR JOURNEY</h6>
            <h2>Our Ceramic Odyssey Crafting Beauty and Quality.</h2>
            <p>
              Our company story is a testament to the enduring love for
              craftsmanship, where we combine our passion for ceramics with an
              unwavering commitment to quality and timeless beauty. Explore the
              journey that has led us to become a trusted source for exquisite
              ceramic products.We're proud to share our story, which mirrors the
              growth of a dream into a thriving destination for exceptional
              creations, reflecting artistry and innovation.
            </p>
          </div>
        </div>
      </div>

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
