import React from "react";
import { Link } from "react-router-dom";

function Card2({ icon, title, link }) {
  const colors = ["#fffff5"];

  let bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="col-6 col-sm-6 col-md-2">
      <Link to={`${link}`} className="dashboard__card2">
        <div className="card__detailss">
          <h4 >{title}</h4>
        </div>
        <div className="card__icon" style={{ background: `${bgColor}` }}>
          {icon}
        </div>
        <div className="card__detailsss">
          <small className="card__enter" style={{ fontWeight: 'bold' }}>Click Here To Enter</small>
        </div>
      </Link>
    </div>
  );
}

export default Card2;
