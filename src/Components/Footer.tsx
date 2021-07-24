import React from "react";
import "./Footer.scss";
import envelope2 from "../Media/envelope2.png";
import location from "../Media/location.png";
import contact from "../Media/call.png";

const Footer = () => {
  return (
    <div className="grid-container" data-aos="fade-up">
      <div className="main-footer container">
        <div className="head">
          <h1>Pompeo</h1>
          <p>
            I have always striven to fix beauty in wood, stone,
            <br />
            glass or pottery, that has been my creed.
          </p>
        </div>

        <div className="contacts">
          <div>
            <img src={envelope2} alt="envelope2" />
            <h2>EMAIL</h2>
            <p>pompeopotery@gmail.com</p>
          </div>
          <div>
            <img src={location} alt="location" />
            <h2>FIND</h2>
            <p>
              Central Park, Manhattan <br />
              New York, 1101
            </p>
          </div>
          <div>
            <img src={contact} alt="contact" />
            <h2>CALL</h2>
            <p>+1 292 345 678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
