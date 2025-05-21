import "./about.css";
import React from "react";
import Cta from "./Cta";
import Footer from "../footer/Footer";
// import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-container-div1">
          <div className="about-info">
            <h1>About Us</h1>
            <p>
              Welcome to the world of CeramicShop, where artistry and innovation
              come together to craft stunning ceramic pieces. Discover our
              story, the passion that drives us, and our commitment to
              delivering timeless beauty and quality.
            </p>
          </div>
          <div className="about-info-img">
            <img src="/images/about-03.jpg" alt="about 3" />
          </div>
        </div>
      </div>
      <div className="about-container-ourstory">
        <div className="ourstory-1">
          <h6>OUR STORY</h6>
          <h2>Explore CeramicShop and Our Ceramic Artistry</h2>
        </div>
        <div className="ourstory-2">
          <p>
            Step into the world of CeramicShop, where we’re dedicated to
            crafting elegant, functional ceramics that elevate your everyday
            life. Our journey is a testament to the artistry and craftsmanship
            that infuse each unique piece. Discover our story, meet the talented
            artisans who bring these creations to life, and experience the
            exceptional beauty that our ceramics add to your surroundings.
            Explore the heart and soul of our store, where every piece is a work
            of art, designed to make your moments more beautiful and special.​
          </p>
        </div>
      </div>
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

      {/* <div className="cta">
        <div className="cta-img">
          <img src="/images/footer-cta.jpg" alt="cta" />
        </div>
        <div className="cta-div">
          <h2>
            Uncover the World of Ceramic Artistry Start Your Journey Here!
          </h2>
          <a href="/shop">SHOP NOW</a>
        </div>
      </div> */}
      <Cta />
      {/* <div className="about-footer-nav">
        <div className="footer-nav-logo">CeramicShop</div>
        <div className="footer-nav-data">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/shop">SHOP</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="social-media-icons">
          <FaFacebook style={iconStyles} />
          <FaTwitter style={iconStyles} />
          <FaInstagram style={iconStyles} />
          <FaYoutube style={iconStyles} />
        </div>
      </div> */}
      {/* <div className="footer-about">
        <p>Copyright © 2025</p>
        <p>All rights reserved</p>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
