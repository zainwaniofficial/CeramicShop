import react, { useState } from 'react'
import './navbar.css'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
     };
  return (
  <>
  <div className="navbar">
    <div class="hamburger" onclick="toggleMenu()">
    &#9776;
  </div>
    <div className="navbar-logo">CeramicShop</div>
    <div className="navbar-data">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/shop">SHOP</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </div>
    <div className="cart-icon">
      <FaShoppingCart/>

    </div>
  </div>
  
  </>
  )
}

export default Navbar
