import React from "react";
// import "../assets/css/product.css";
import globe from "../../src/assets/img/globe2.png";
import doc from "../../src/assets/img/globe2.png";
import up from "../../src/assets/img/globe2.png";
import naro from "../../src/assets/img/naro.png";


function About() {
  return (
    <>
      <div className="main-90">
        <div className="product-90">
          <p>OUR PRODUCTS</p>
          <span>
            With the development of technology, we innovate in creating various
            kinds of digital products
          </span>
        </div>
        <div className="content-90">
            <div className="card-90">
              <img src={naro} />

              <span>NARALOBI</span>

              <p>
                A billing platform that can provide convenience for individuals
                or business entities in making invoices for customers
              </p>
              <span>Know More</span>
            </div>

            <div className="card-90">
              <img src={naro} />

              <span>NARALOBI</span>

              <p>
                A billing platform that can provide convenience for individuals
                or business entities in making invoices for customers
              </p>
              <span>Know More</span>
            </div>

            <div className="card-90">
              <img  className="kartunaro" src={naro} />

              <span>NARALOBI</span>

              <p>
                A billing platform that can provide convenience for individuals
                or business entities in making invoices for customers
              </p>
              <span>Know More</span>
            </div>

   
          </div>
        </div>
  
    </>
  );
}

export default About;
