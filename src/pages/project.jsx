import React from "react";
import Navbar from ".././component/navbar/navbar";
// import styles from "../assets/css/project.css";
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

function Achive() {
  return (
    <>
      <div className="main-5">
        <p>OUR PRODUCT</p>
        <span>
          We are ready to provide the best service and support for more advanced
          business needs
        </span>
        <div className="achive-5">
          <div className="achive-6">
            <p>JakLingko Indonesia</p>
            <span>
              Jatelindo Perkasa Abadi is appointed as the consortium leader for
              Jaklingko along with Thales, Lyko and Aino Indonesia. The
              Jatelindo consortium through JakLingko Indonesia will implement an
              electronic integrated payment and rate system for the public
              transportation operators operating in Jabodetabek.
            </span>
          </div>
          <img src={jak} />

          <hr />
        </div>
        <hr />
      </div>

      <div className="main-2">
        <div className="row-1">
          <div className="card-8">
            <img src={pln} alt="" />
          </div>

          <div className="card-8">
            <img src={pdam} alt="" />
          </div>

          <div className="card-8">
            <img src={bpjs} alt="" />
          </div>
          <div className="tulisan-7">
            <p>Essential Services</p>
            <span>
              Providing solutions in transactions for payments and billing using
              high security standards and guaranteed for public utilities
            </span>
          </div>
        </div>

        <div className="row-2">
          <div className="tulisan-7">
            <p>Telco Billing</p>
            <span>
              Become a facilitator for Telco Billing in easy and safe payment
              transactions
            </span>
          </div>
          <div className="card-8">
            <img src={telkom} alt="" />
          </div>

          <div className="card-8">
            <img src={sel} alt="" />
          </div>

          <div className="card-8">
            <img src={indo} alt="" />
          </div>
        </div>

        <div className="row-3">
          <div className="card-8">
            <img src={beranda} alt="" />
          </div>

          <div className="card-8">
            <img src={green} alt="" />
          </div>

          <div className="card-8">
            <img src={green} alt="" />
          </div>

          <div className="tulisan-7">
            <p>Residency</p>
            <span>
              Paying the cost of treatment at the residency is easier and more
              reliable than before
            </span>
          </div>
        </div>

        <div className="row-4">
          <div className="tulisan-7">
            <p>Transportasi</p>
            <span>
              Be part of business partners and projects across transportation by
              providing solutions and services for users' needs
            </span>
          </div>
          <div className="card-8">
            <img src={lrt} alt="" />
          </div>

          <div className="card-8">
            <img src={mrt} alt="" />
          </div>

          <div className="card-8">
            <img src={tj} alt="" />
          </div>
        </div>
        <hr />
      </div>

      <div className="partner">
        <span>PARTNER FOR PROJECT</span>
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
      </div>
    </>
  );
}

export default Achive;
