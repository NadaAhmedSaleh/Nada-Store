import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.scss";
import strings from "../../utils/strings";
import truncateText from "../../utils/truncateText";

function ProductCard({ product, color }) {
  const { title, price, category, rating } = product;
  return (
    <div className="product-card">
      <div
        className="colored-card"
        style={{ backgroundColor: `var(${color})` }}
      />
      <div className="info-card ">
        <div className="category-icon-container">
          <p>{category}</p>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div className="info-bottom-container">
          <div className="price-title-container">
            <p className="price">{price + strings.currency}</p>
            <p className="title">{truncateText(title, 6)}</p>
          </div>
          <div className="count-container">
            <p>{strings.ratingsCount}</p>
            <p>{rating.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
