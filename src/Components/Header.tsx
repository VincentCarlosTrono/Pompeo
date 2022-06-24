import React from "react";
import "../Styling//Header.scss";

export const Header = () => {
  return (
    <div className="pompeo-main grid-container">
      <div className="pompeo container">
        <h1>Pompeo</h1>
        <div className="pompeo-buttons">
          <ul>
            <li className="with-bgc">
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#shop">SHOP</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>

            <div className="logo-cart">
              <box-icon name="cart" color="gray"></box-icon>
              <li>cart</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
