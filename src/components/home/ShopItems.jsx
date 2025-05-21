import React from "react";

const ShopItems = () => {
  const shopItems = [
    {
      id: 1,
      itemImg: "/images/ceramic-cup.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 2,
      itemImg: "/images/ceramic-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 3,
      itemImg: "/images/ceramic-pink-plate.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 4,
      itemImg: "/images/ceramic-plates-spoons.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 5,
      itemImg: "/images/ceramic-plates-bowls.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
    {
      id: 6,
      itemImg: "/images/ceramic-vases-plates.jpg",
      type: "Ceramic",
      name: "Ceramic Cup",
      review: "****",
      discount: "$355",
      price: "$232",
    },
  ];

  return (
    <div className="most-popular">
      <div className="popular-heading">
        <h6>MOST POPULAR</h6>
        <h2>Discover the Latest Additions at Your Top Choice Flower Shop</h2>
      </div>
      <div className="shop-item-container">
        {shopItems.map((item) => {
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
    </div>
  );
};

export default ShopItems;
