import React from "react";
import "./Details.scss";
import vase1 from "../Media/vase1.png";
import vase2 from "../Media/vase2.png";

const Details = () => {
  return (
    <div className="main-details grid-container">
      <div className="details container">
        <div>
          <div className="vase-bgc">
            <img src={vase1} alt="vase1" />
          </div>
        </div>
        <div className="more-details">
          <h1>Gold & Black Pottery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <button>View Details</button>
        </div>
      </div>
      <div className="details container">
        <div className="more-details">
          <div>
            <h1>Orange Ceramic</h1>
            <p>
              Pri cu dico labores officiis, odio principes complectitur ad sea.
              Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
              definitiones id cum, ad meliore perpetua referrentur sed. Quas
              suscipit ad mea verear vivendo tincidunt.
            </p>

            <button>View Details</button>
          </div>
        </div>
        <div>
          <div className="vase-bgc">
            <img src={vase2} alt="vase2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
