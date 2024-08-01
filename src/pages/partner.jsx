import React from "react";

import bpjs from "../../src/assets/img/bpjs.png";

import pdam from "../../src/assets/img/pdam.png";
import jak from "../../src/assets/img/jak.png";
import pln from "../../src/assets/img/pln.png";

import telkom from "../../src/assets/img/telkom.png";
import sel from "../../src/assets/img/sel.png";
import indo from "../../src/assets/img/indo.png";

import beranda from "../../src/assets/img/beranda.png";
import green from "../../src/assets/img/green.png";

import lrt from "../../src/assets/img/lrt.png";
import mrt from "../../src/assets/img/mrt.png";
import tj from "../../src/assets/img/tj.png";

import eas from "../../src/assets/img/eas.png";
import bni from "../../src/assets/img/bni.png";
import bri from "../../src/assets/img/bri.png";
import alto from "../../src/assets/img/alto.png";
import jalin from "../../src/assets/img/jalin.png";
import cimb from "../../src/assets/img/cimb.png";
import dana from "../../src/assets/img/dana.png";

function About() {
  return (
    <>
      <div className="partner">
        <span>TRUSTED PARTNERS</span>
        <p>Some of the partners we have supported to grow together</p>
        <div className="partner-1">
          <div className="card-8">
            <img src={mrt} />
          </div>
          <div className="card-8">
            <img src={green} />
          </div>
          <div className="card-8">
            <img src={beranda} />
          </div>
          <div className="card-8">
            <img src={tj} />
          </div>
          <div className="card-8">
            <img src={pln} />
          </div>
          <div className="card-8">
            <img src={lrt} />
          </div>
        </div>

        <div className="partner-2">
          <div className="card-8">
            <img src={sel} />
          </div>
          <div className="card-8">
            <img src={indo} />
          </div>
          <div className="card-8">
            <img src={telkom} />
          </div>
          <div className="card-8">
            <img src={pdam} />
          </div>
          <div className="card-8">
            <img src={bpjs} />
          </div>
          <div className="card-8">
            <img src={eas} />
          </div>
        </div>

        <div className="partner-3">
          <div className="card-8">
            <img src={bni} />
          </div>
          <div className="card-8">
            <img src={bri} />
          </div>
          <div className="card-8">
            <img src={alto} />
          </div>
          <div className="card-8">
            <img src={jalin} />
          </div>
          <div className="card-8">
            <img src={cimb} />
          </div>
          <div className="card-8">
            <img src={dana} />
          </div>
        </div>
        <div className="button-8">View All</div>
      </div>
    </>
  );
}

export default About;
