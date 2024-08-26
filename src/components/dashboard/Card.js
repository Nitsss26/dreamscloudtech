// import React from "react";
// import { Link } from "react-router-dom";
// import CountUp from "react-countup";

// function Card({ icon, title, value, link, isPercentage, text, message }) {
//   const colors = [
//     "#fffff5", // Main theme color (cyan)
//     // "#ffcc66", // Light Orange
//     // "#66cc99", // Light Green
//     // "#ff6666", // Light Red
//     // "#ffd966", // Light Yellow
//     // "#66cccc", // Light Teal
//     // "#ff99cc", // Light Pink
//     // "#cc99ff", // Light Purple
//     // "#ffb366"  // Light Peach
//   ];


//   let bgColor = colors[Math.floor(Math.random() * colors.length)];

//   return (
//     <div className="col-6 col-sm-6 col-md-2 " >
//       <Link to={`${link}`} className="dashboard__card">
//         <div className="card__icon" style={{ background: `${bgColor}` }}>
//           {icon}
//         </div>
//         <div className="card__details" >
//           <h5 >{title}</h5>
//           <div className="card__digits">
//             <strong>
//               {text ? value : <CountUp end={value || 0}></CountUp>}

//               {isPercentage && "%"}
//             </strong>
//           </div>
//           <small>{message ? message : "Registered"}</small>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Card({ icon, title, value, link, isPercentage, text, message }) {
  const colors = ["#fffff5"]; // Main theme color

  let bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="col-6 col-sm-6 col-md-2">
      <Link to={`${link}`} className="dashboard__card">
        <div className="card__details">
          <h4 className="card__title" >{title}</h4>
          <div className="card__content">
            <div className={title === "Students" ? "card__icon2" : "card__icon"} style={{ background: `${bgColor}` }}>
              {icon}
            </div>
            <div className="card__digits">
              <strong>
                {text ? value : <CountUp end={value || 0} />}
                {isPercentage && "%"}
              </strong>
            </div>
          </div>
          <div className="card__enter">
            <small style={{ fontWeight: 'bold' }}>
              {message ? message : "Registered"}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
