import "./contact.css";
import React, { useState } from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import GetinTouch from "./GetinTouch/GetinTouch";
import Cta from "../about/Cta";
import Faqs from "./Faqs/Faq";

const Contact = () => {
  return (
    <>
      <ContactInfo />
      <GetinTouch />
      <Faqs />
      <Cta />
    </>
  );
};

export default Contact;
