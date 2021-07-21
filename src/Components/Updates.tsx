import React from "react";
import "./Updates.scss";
import plane from "../Media/plane.png";

const Updates = () => {
  return (
    <div className="grid-container">
      <div className="main-plane container">
        <div>
          <div className="plane">
            <div>
              <img src={plane} alt="plane" />
            </div>
          </div>
        </div>
        <p>LATEST NEWS</p>
        <h1>Latest news & New updates</h1>
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
