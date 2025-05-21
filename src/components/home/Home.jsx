import Banner from "./Banner";
import "./home.css";
import React from "react";
import ShopItems from "./ShopItems";
import Cta from "../about/Cta";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="home-about-ceramic">
        <div className="ceramic-heading">
          <h6>ABOUT CERAMIC SHOP</h6>
        </div>
        <div className="ceramic-para">
          <h2>
            The versatility of ceramics is what makes them truly remarkable,
            with their presence in various forms such as stoneware and
            porcelain.
          </h2>
        </div>
        <div className="ceramic-photos">
          <div className="ceramic-photos-1">
            <img src="/images/about-01.jpg" alt="" />
          </div>
          <div className="ceramic-photos-2">
            <img src="/images/about-02.jpg" alt="" />
            <h4>
              Welcome to Ceramic Shop, where passion meets craftsmanship to
              bring you a world of timeless beauty and creativity.
            </h4>
            <p>
              Our journey is steeped in the art of ceramics, where each piece
              tells a unique story. Get to know the heart and soul behind our
              store.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
      <div className="home-catagory">
        <div className="catagory-left">
          <h6>THE BEST OR CERMAICS</h6>
          <h2>Our Products Category​</h2>
          <p>
            Explore our exquisite collection of ceramic treasures that elevate
            your spaces and celebrate the artistry of craftsmanship. From
            dinnerware to decor, each piece in our product range is a testament
            to quality, style, and the timeless beauty of ceramics.
          </p>
          <div className="catagory-left-img">
            <div className="catagory-image-container">
              <h4>Stylish Ceramic Home Decor</h4>
              <p>Starting from just $99.00</p>
            </div>
          </div>
        </div>
        <div className="catagory-right">
          <div className="catagory-right-img-1">
            <div className="catagory-image-container">
              <h4>Stylish Ceramic Home Decor</h4>
              <p>Starting from just $99.00</p>
            </div>
          </div>
          <div className="catagory-right-img-2">
            <div className="catagory-image-container">
              <h4>Stylish Ceramic Home Decor</h4>
              <p>Starting from just $99.00</p>
            </div>
          </div>
        </div>
      </div>
      <ShopItems />
      <div className="home-cta">
        <div className="cta-inside">
          <h2>Begin Your Ceramic Journey Explore Our Stunning Collections</h2>
          <h4>Starting from just $149.00</h4>
          <a href="/shop">SHOP NOW</a>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
