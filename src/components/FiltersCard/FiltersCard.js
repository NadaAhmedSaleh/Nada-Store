import React from "react";
import "./FiltersCard.scss";
import strings from "../../utils/strings";

function FiltersCard() {
  return <div className="filters-card">
    <div className="filters-data-card">
      <ul>
        <li>{strings.timeFilters.daily}</li>
        <li>{strings.timeFilters.weekly}</li>
        <li>{strings.timeFilters.monthly}</li>
      </ul>
    </div>
    <div className="title-card">
      <div className="img-container">
        <img src={process.env.PUBLIC_URL + '/images/title-photo.jpg'} alt="title" />
      </div>
      <div className="title-container">
        <p>{strings.reportFor}</p>
        <div className="sales-title">
          <h3>{strings.best}</h3>
          <h3>{strings.sales}</h3>
        </div>
      </div>
    </div>

  </div>;
}

export default FiltersCard;
