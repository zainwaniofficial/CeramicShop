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
      <div className="most-popular">
        <div className="popular-heading">
          <h6>MOST POPULAR</h6>
          <h2>Discover the Latest Additions at Your Top Choice Flower Shop</h2>
        </div>
        <div className="shop-item-container">
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
      <div className="home-cta">
        <div className="cta-inside">
          <h2>Begin Your Ceramic Journey Explore Our Stunning Collections</h2>
          <h4>Starting from just $149.00</h4>
          <a href="/shop">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
