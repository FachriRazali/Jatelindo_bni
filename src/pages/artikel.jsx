// import React from "react";
// import art from "../../src/assets/img/4.png";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import DataFetchingComponent from "../component/DataFetchingComponent";

// function About() {
//   return (
//     <div className="main-4">
//       <div className="product-4">
//         <p>ARTICLE</p>
//         <span>Follow all of our activities</span>
//         <div className="content-4">
//           <div className="owl-carousel">
//             <Link to="/detail">
//               <img src={art} alt="Image 1" />
//             </Link>
//             <DataFetchingComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataFetchingComponent from "../component/DataFetchingComponent";
import art from "../../src/assets/img/4.png";

function About() {
  const [data, setData] = useState([]);

  return (
    <div className="main-4">
      <div className="product-4">
        <p>ARTICLE</p>
        <span>Follow all of our activities</span>
        <div className="content-4">
          <div className="owl-carousel">
            {data.slice(0, 2).map((item) => (
              <Link key={item.id} to={`/detail/${item.id}`}>
                <img src={art} alt={item.title} />
              </Link>
            ))}
            <DataFetchingComponent setData={setData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
