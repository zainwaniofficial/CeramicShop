import "./contact.css";
import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Contact = () => {
  let iconStyles = { color: "black", margin: "10px" };
  return (
    <>
      <div className="contact-container-div1">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We're here to assist you in any way we can. Whether you have
            questions about our products, need personalized recommendations, or
            simply want to connect with our team, don't hesitate to reach out.
          </p>
        </div>
        <div className="contact-info-img">
          <img src="/images/contact-01.jpg" alt="about 3" />
        </div>
      </div>

      <div className="get-in-touch">
        <div className="touch-message">
          <h2>Get in touch</h2>
          <p className="getintouch-para">
            Share some details here. This is Flexible section where you can
            share anything you want. It could be details or some information.
          </p>
          <div className="address">
            <span className="address-icon icon">
              <MdLocationOn />
            </span>
            <div className="addressbox-container">
              <h6>
                <span>Address</span>
              </h6>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
          </div>
          <div className="mail address">
            <span className="mail-icon icon">
              <MdEmail />
            </span>
            <div className="mailbox-container addressbox-container ">
              <h6>
                <span>mail</span>
              </h6>
              <p>zainwani553@gmail.com</p>
            </div>
          </div>
          <div className="phone address">
            <span className="phone-icon icon">
              <MdPhone />
            </span>
            <div className="phonebox-container addressbox-container">
              <h6>
                <span>Phone</span>
              </h6>
              <p> +917006916978</p>
            </div>
          </div>
          <div className="follow address ">
            <div className="phonebox-container addressbox-container">
              <h6>
                <span>Follow</span>
              </h6>
              <p className="follow-para">
                <span>
                  <FaFacebook />
                </span>

                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaYoutube />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="touch-form">
          <div className="form-wrapper">
            <form className="contact-form">
              <label className="form-label">Name *</label>
              <div className="name-fields">
                <div className="name-input">
                  <input type="text" name="firstName" placeholder="" required />
                  <small>First</small>
                </div>
                <div className="name-input">
                  <input type="text" name="lastName" placeholder="" required />
                  <small>Last</small>
                </div>
              </div>

              <label className="form-label">Email *</label>
              <input type="email" name="email" required />

              <label className="form-label">Comment or Message</label>
              <textarea name="message" rows="5" required />

              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="faqs">
        <div className="faq-message">
          <h2>FAQS</h2>
          <p>
            Find answers to common questions about our ceramic products,
            ordering, shipping, care, and more. If you need further information,
            feel free to contact our support team.
          </p>
        </div>
        <div className="faq-questions">
          <div className="question">
            <h5>Ordering and Shipping</h5>
          </div>
          <div className="question">
            <h5>Product Care and Maintenance</h5>
          </div>
          <div className="question">
            <h5>Return and Refund</h5>
          </div>
          <div className="question">
            <h5>Custom Orders and Personalization</h5>
          </div>
          <div className="question">
            <h5>Contact and Customer Support</h5>
          </div>
        </div>
      </div>
      <div className="cta">
        <div className="cta-img">
          <img src="/images/footer-cta.jpg" alt="cta" />
        </div>
        <div className="cta-div">
          <h2>
            Uncover the World of Ceramic Artistry Start Your Journey Here!
          </h2>
          <a href="/shop">SHOP NOW</a>
        </div>
      </div>
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
        <p>All rights reserved</p>
      </div>
    </>
  );
};

export default Contact;
