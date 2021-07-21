import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="pompeo-main grid-container">
      <div className="pompeo container">
        <h1>Pompeo</h1>
        <div className="pompeo-buttons">
          <ul>
            <li className="with-bgc">HOME</li>
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>CONTACT</li>
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
