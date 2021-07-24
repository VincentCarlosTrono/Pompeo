import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="grid-container" id="hero-section">
      <div className="container" data-aos="fade-up">
        <div>
          <h3>POMPEO POTTERY</h3>
          <h1>
            Unique Porcelain <span>&</span> <br />
            Stone Collection
          </h1>
          <p>
            Unique & modern pottery made by our master in porcelain & stones
          </p>
          <button data-aos="fade-up">SHOP COLLECTION</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
