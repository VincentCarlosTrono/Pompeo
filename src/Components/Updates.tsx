import React from "react";
import "../Styling//Updates.scss";
import plane from "../Media/plane.png";

const Updates = () => {
  return (
    <div className="grid-container" id="contact">
      <div className="main-plane container" data-aos="fade-up">
        <div>
          <div className="plane">
            <div data-aos="fade-up">
              <img src={plane} alt="plane" />
            </div>
          </div>
        </div>
        <p data-aos="fade-up">LATEST NEWS</p>
        <h1 data-aos="fade-up">Latest news & New updates</h1>
        <div className="subscribe-form">
          <input type="text" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="checkbox">
          <input type="checkbox" />

          <h4>Sign up for our news letter</h4>
        </div>
      </div>
    </div>
  );
};

export default Updates;
