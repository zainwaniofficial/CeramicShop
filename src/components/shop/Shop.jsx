import "./shop.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";

const Shop = () => {
  let iconStyles = { color: "black", margin: "10px" };
  return (
    <>
      <div className="shop-container">
        <div className="heading-shop">
          <h2>Shop</h2>
        </div>
        <div className="shop-item-container">
          <div className="shop-items">
            <img src="/images/product-bottle.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Bottle</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-cup.jpg" alt="ceramic cup" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Cup</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/product-cup.jpg" alt="cup" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Drink Coasters</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/cactus.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Garden Pots</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/pastel-plates.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Pastel Plates</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/plane-pots.jpg" alt="bottle" />
            <span className="product-type">Pottery</span>
            <h2 className="product-name">Ceramic Plant Pots</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-plates.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Planter</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-pink-plate.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Plates</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-plates-bowls.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Plates and Bowls</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-plates-spoons.jpg" alt="bottle" />
            <span className="product-type">Ceramic</span>
            <h2 className="product-name">Ceramic Plates and Spoons</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
          <div className="shop-items">
            <img src="/images/ceramic-vases-plates.jpg" alt="bottle" />
            <span className="product-type">Pottery</span>
            <h2 className="product-name">Ceramic Vases and Planters</h2>
            <div className="review-rating">*****</div>
            <div>
              <span className="discount-price">$355</span>
              <span className="price">$232</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shop">
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
      </div>
    </>
  );
};

export default Shop;
