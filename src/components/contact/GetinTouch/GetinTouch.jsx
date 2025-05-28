import React, { useState } from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./GetinTouch.css";

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Submitted");
  };

  return (
    <div className="get-in-touch">
      <div className="touch-message">
        <h2>Get in touch</h2>
        <p className="getintouch-para">
          Share some details here. This is a flexible section where you can
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
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
        </div>

        <div className="mail address">
          <span className="mail-icon icon">
            <MdEmail />
          </span>
          <div className="mailbox-container addressbox-container">
            <h6>
              <span>Mail</span>
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
            <p>+91 7006916978</p>
          </div>
        </div>

        <div className="follow address">
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">Name *</label>
            <div className="name-fields">
              <div className="name-input">
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleInputChange}
                  value={formData.firstName}
                />
                <small>First</small>
              </div>
              <div className="name-input">
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleInputChange}
                  value={formData.lastName}
                />
                <small>Last</small>
              </div>
            </div>

            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />

            <label className="form-label">Comment or Message</label>
            <textarea
              name="message"
              rows="5"
              required
              onChange={handleInputChange}
              value={formData.message}
            />

            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
