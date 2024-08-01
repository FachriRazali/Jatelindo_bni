import React from "react";
// import "../assets/css/achive.css";
import achive from "../../src/assets/img/achive.png";
import bi from "../../src/assets/img/bi.png";
import kominfo from "../../src/assets/img/kominfo.png";
import bu from "../../src/assets/img/bu.png";

function Achive() {
  return (
    <>
      <div className="achive">
        <img src={achive} />
        <div className="achive-2">
          <p>ACHIVEMENT</p>
          <span>License & Certificate</span>
          <p>
            Jatelindo Perkasa Abadi has licenses and certifications according to
            Indonesian standards, which means we comply with all existing rules
            and regulations to create satisfaction and trust in providing the
            best service.
          </p>
        </div>
        <hr />
      </div>

      <div className="collab">
        <hr />
        <span>ACHIVEMENT</span>
        <div className="collab-2">
          <div className="card">
            <img src={bi} />
          </div>

          <div className="card">
            <img src={kominfo} />
          </div>

          <div className="card">
            <img src={bu} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Achive;
