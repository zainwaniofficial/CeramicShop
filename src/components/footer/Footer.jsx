import "./footer.css";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  let iconStyles = { color: "black", margin: "10px" };

  return (
    <div>
      <div className="about-footer-nav">
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
      </div>
      <div className="footer-about">
        <p>Copyright © 2025</p>
        <p>
          Developed with <FaHeart /> by &nbsp;
          <a href="https://github.com/zainwaniofficial" target="_blank">
            codewithxain
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
