import React from "react";
import "./Categories.scss";
import vase from "../Media/vase.png";
import cup from "../Media/cup.png";
import plate from "../Media/plate.png";

const Categories = () => {
  return (
    <div className="main-categories grid-container">
      <div className="container">
        <div className="head">
          <p>PRODUCT CATEGORIES</p>
          <h1>
            Porcelain <span>&</span> Pottery
          </h1>
        </div>
        <div className="main-icon">
          <div className="vase round">
            <div className="vase-border">
              <img src={vase} alt="vase" />
              <p>Vases</p>
            </div>
          </div>
          <div className="cup round">
            <div className="cup-border">
              <img src={cup} alt="cup" />
              <p>Cups</p>
            </div>
          </div>
          <div className="plate round">
            <div className="plate-border">
              <img src={plate} alt="plate" />
              <p>Plates</p>
            </div>
          </div>
        </div>
        <div className="context">
          <div>
            <h1>
              Hand Grafted <br /> Pottery since 1990
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>{" "}
          <div>
            <h1>
              We Provide Premium <br /> Pottery Produts
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
