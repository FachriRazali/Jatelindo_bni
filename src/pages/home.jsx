import React from "react";
// import "../assets/css/home.css";
import globe from "../../src/assets/img/globe2.png";
import doc from "../../src/assets/img/globe2.png";
import up from "../../src/assets/img/globe2.png";
import stok from "../../src/assets/img/stok2.png";


function Home() {
  return (
    <>
      <div className="header">
        <div className="header-1">
          <p>Trusted Payment</p>
          <p>Complete Solution</p>
          <br />

          <span>
            Engaged with all billing providers and financial services industries
            as a Biller Aggregator
          </span>

          <button
            type="button"
            className="tombol"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <strong>Contact Sales</strong>
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-2">
          <img src={stok} alt="Stock" />
        </div>
      </div>

      <div className="main">
        <div className="card">
          <img src={doc} alt="Document" />
          <span>± 38 Million</span>
          <p>Transactions done every month</p>
        </div>

        <div className="card">
          <img src={globe} alt="Globe" />
          <span>± 38 Million</span>
          <p>Transactions done every month</p>
        </div>

        <div className="card">
          <img src={up} alt="Upward Arrow" />
          <span>± 38 Million</span>
          <p>Transactions done every month</p>
        </div>
      </div>
    </>
  );
}

export default Home;
