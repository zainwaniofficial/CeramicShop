import React from "react";

const ShopProducts = () => {
  const shopProducts = [
    {
      id: 1,
      itemImg: "/images/product-bottle.jpg",
      type: "Ceramic",
      name: "Ceramic Bottle",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 2,
      itemImg: "/images/ceramic-cup.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 3,
      itemImg: "/images/product-cup.jpg",
      type: "Ceramic",
      name: "Ceramic Drink Coasters",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 4,
      itemImg: "/images/cactus.jpg",
      type: "Ceramic",
      name: "Ceramic Garden Pots",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 5,
      itemImg: "/images/pastel-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Pastel Plates",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 6,
      itemImg: "/images/plane-pots.jpg",
      type: "Pottery",
      name: "Ceramic Plant Pots",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 7,
      itemImg: "/images/ceramic-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Planter",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 8,
      itemImg: "/images/ceramic-pink-plate.jpg",
      type: "Ceramic",
      name: "Ceramic Plates",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 9,
      itemImg: "/images/ceramic-plates-bowls.jpg",
      type: "Ceramic",
      name: "Ceramic Planter",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 10,
      itemImg: "/images/ceramic-plates-spoons.jpg",
      type: "Ceramic",
      name: "Ceramic Plates",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 11,
      itemImg: "/images/ceramic-vases-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Plates and Bowls",
      review: "****",
      discount: "$355",
      price: "$232",
    },
  ];

  return (
    <div className="shop-item-container">
      {shopProducts.map((item) => {
        return (
          <div key={item.id} className="shop-items">
            <img src={item.itemImg} alt="ceramic cup" />
            <span className="product-type">{item.type}</span>
            <h2 className="product-name">{item.name}</h2>
            <div className="review-rating">{item.review}</div>
            <div>
              <span className="discount-price">{item.discount}</span>
              <span className="price">{item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
