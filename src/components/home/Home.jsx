import "./home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-container-div1">
          <div className="homec-div1-container">
            <div className="home-info">
              <div className="homeinfo-h6">
                <h6>Welcome to Ceramic Shop</h6>
              </div>
            </div>
            <div className="homeinfo-h1">
              <h1>
                Elevate Your <br />
                Space with <br />
                Ceramic <br /> Elegance.
              </h1>
            </div>
            <div className="homeinfo-h4">
              <h4>Starting from just $149.00</h4>
            </div>
            <div className="home-button">
              <a href="/shop">SHOP NOW</a>
            </div>
          </div>
          <div className="homec-div1-container-2">
            <div className="img1">
              <img src="/images/hero-01.jpg" alt="hero1" />
            </div>
            <div className="img2">
              <img src="/images/hero-02.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
