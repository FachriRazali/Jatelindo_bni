import React from "react";
// import "../assets/css/about.css";
import rapat1 from "../../src/assets/img/rapat1.png";
import rapat2 from "../../src/assets/img/rapat3.png";
import rapat3 from "../../src/assets/img/rapat2.png";
import stok from "../../src/assets/img/stok2.png";

function About() {
  return (
    <>
      <div className="main">
        <div className="gambar-1">
          <img src={rapat1} alt="" />
          <img src={rapat2} alt="" />
        </div>
        <img className="gambarsolo" src={rapat3} alt="" />

        <div className="tulisan">
          <span>ABOUT US</span>
          <p>Jatelindo Perkasa Abadi started to stand</p>
          <span>
            Established in 2004, PT Jatelindo Perkasa Abadi started out with the
            Electronic Billing Presentation and Payment System (EBPP) as its
            main service. One of the best switching company that engage with all
            billing providers and financial services industries as a Biller
            Aggregator. We have worked with network partners and various payment
            channel all over Indonesia.
          </span>
        </div>
      </div>

      <div className="deskripsi-3">
        <div className="card-9">
          <span> VISION & MISSION </span>
          <p>To become the leader in electronic transaction service provider</p>
        </div>

        <div className="card-9">
          <span>
            We believe in providing reliability and safety in every transaction
            that follows the Central Bank policies and procedures. We value
            quality, professionalism, integrity, as well as technological
            advancements to provide the best possible payment solutions.
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
