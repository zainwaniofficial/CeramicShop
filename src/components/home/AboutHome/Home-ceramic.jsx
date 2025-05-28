import React from "react";
import "./AboutCeramichome.css"; // Make sure this path is correct

const AboutCeramic = () => {
  return (
    <div className="home-about-ceramic">
      <div className="ceramic-heading">
        <h6>ABOUT CERAMIC SHOP</h6>
      </div>
      <div className="ceramic-para">
        <h2>
          The versatility of ceramics is what makes them truly remarkable, with
          their presence in various forms such as stoneware and porcelain.
        </h2>
      </div>
      <div className="ceramic-photos">
        <div className="ceramic-photos-1">
          <img src="/images/about-01.jpg" alt="Ceramic piece 1" />
        </div>
        <div className="ceramic-photos-2">
          <img src="/images/about-02.jpg" alt="Ceramic piece 2" />
          <h4>
            Welcome to Ceramic Shop, where passion meets craftsmanship to bring
            you a world of timeless beauty and creativity.
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
  );
};

export default AboutCeramic;
