import React from "react";
import "./Collection.scss";

import collection1 from "../Media/collection1.png";
import collection2 from "../Media/collection2.png";
import collection3 from "../Media/collection3.png";
import collection4 from "../Media/collection4.png";
import collection5 from "../Media/collection5.png";
import collection6 from "../Media/collection7.png";

const cardItems = [
  {
    image: collection1,
    name: "Decor Plate",
    price: "$60.00 USD",
  },
  {
    image: collection2,
    name: "Mint Pottery",
    price: "$75.00 USD",
  },
  {
    image: collection3,
    name: "Set of Potteries",
    price: "$125.00 USD",
  },
];
const cardItems2 = [
  {
    image: collection4,
    name: "Orange Ceramic",
    price: "$80.00 USD",
  },
  {
    image: collection5,
    name: "Dark Bowl",
    price: "$152.00 USD",
  },
  {
    image: collection6,
    name: "Square Pottery",
    price: "$75.00 USD",
  },
];

const Collection = () => {
  return (
    <div className="collection grid-container">
      <div className="collection-item container" data-aos="fade-up">
        <div className="collection-head">
          <p>OUR ONLINE STORE</p>
          <h1>Pottery Collection</h1>
        </div>
        <div className="cards" data-aos="fade-up">
          {cardItems.map((item) => {
            return (
              <div className="collection-card">
                <div>
                  <img src={item.image} alt="item image" />
                </div>
                <div>
                  <p>{item.name}</p>

                  <h3>{item.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cards" data-aos="fade-up">
          {cardItems2.map((item) => {
            return (
              <div className="collection-card">
                <div>
                  <img src={item.image} alt="item image" />
                </div>
                <div>
                  <p>{item.name}</p>

                  <h3>{item.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <button>VIEW ALL PRODUCTS</button>
      </div>
    </div>
  );
};

export default Collection;
