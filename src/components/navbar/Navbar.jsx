import React, { useState } from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <div className="nav-hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="nav-logo">
          <Link to="/">CeramicShop</Link>
        </div>
        <div className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`nav-link ${pathname === "/shop" ? "active" : ""}`}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
