import React from "react";
import "./Faq.css";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faq-message">
        <h2>FAQS</h2>
        <p>
          Find answers to common questions about our ceramic products, ordering,
          shipping, care, and more. If you need further information, feel free
          to contact our support team.
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
  );
};

export default Faqs;
