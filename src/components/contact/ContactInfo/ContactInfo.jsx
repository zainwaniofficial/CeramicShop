import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-container-div1">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          We're here to assist you in any way we can. Whether you have questions
          about our products, need personalized recommendations, or simply want
          to connect with our team, don't hesitate to reach out.
        </p>
      </div>
      <div className="contact-info-img">
        <img src="/images/contact-01.jpg" alt="about 3" />
      </div>
    </div>
  );
};

export default ContactInfo;
