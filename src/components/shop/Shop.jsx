import "./shop.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import ShopProducts from "./ShopProducts";

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
    </>
  );
};

export default Shop;
