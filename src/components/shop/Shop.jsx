import "./shop.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import ShopProducts from "./ShopProducts";
import Footer from "../footer/Footer";

const Shop = () => {
  let iconStyles = { color: "black", margin: "10px" };
  return (
    <>
      <div className="shop-container">
        <div className="heading-shop">
          <h2>Shop</h2>
        </div>

        <ShopProducts />
      </div>
      {/* <div className="footer-shop">
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
      </div> */}
    </>
  );
};

export default Shop;
