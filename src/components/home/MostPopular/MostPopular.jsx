import React from "react";
import "./MostPopular.css";

const MostPopular = () => {
  const popularItems = [
    {
      id: 1,
      itemImg: "/images/ceramic-cup.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
    {
      id: 2,
      itemImg: "/images/ceramic-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Plates",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
    {
      id: 3,
      itemImg: "/images/ceramic-pink-plate.jpg",
      type: "Ceramic",
      name: "Pink Ceramic Plate",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
    {
      id: 4,
      itemImg: "/images/ceramic-plates-spoons.jpg",
      type: "Ceramic",
      name: "Ceramic Plates & Spoons",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
    {
      id: 5,
      itemImg: "/images/ceramic-plates-bowls.jpg",
      type: "Ceramic",
      name: "Plates & Bowls Set",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
    {
      id: 6,
      itemImg: "/images/ceramic-vases-plates.jpg",
      type: "Ceramic",
      name: "Vases & Plates",
      review: "★★★★☆",
      discount: "$355",
      price: "$232",
    },
  ];

  return (
    <div className="mp-wrapper">
      <div className="mp-header">
        <h6 className="mp-subtitle">MOST POPULAR</h6>
        <h2 className="mp-title">
          Discover the Latest Additions at Your Top Choice Ceramic Shop
        </h2>
      </div>
      <div className="mp-grid">
        {popularItems.map((item) => (
          <div key={item.id} className="mp-card">
            <img src={item.itemImg} alt={item.name} className="mp-image" />
            <span className="mp-type">{item.type}</span>
            <h2 className="mp-name">{item.name}</h2>
            <div className="mp-rating">{item.review}</div>
            <div className="mp-price-box">
              <span className="mp-discount">{item.discount}</span>
              <span className="mp-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
