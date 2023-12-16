import React from "react";
import "./ProductCard.scss";
import strings from "../../utils/strings";
import products from "../../data";

function ProductCard() {
  const { title, price, category, rating } = products[0];
  return (
    <div className="product-card">
      <div className="colored-card" />
      <div className="info-card ">
        <div className="category-icon-container">
          <p>{category}</p>
          <p>n</p>
        </div>
        <div className="info-bottom-container">
          <div className="price-title-container">
            <p className="price">{price + strings.currency}</p>
            <p className="title">{title}</p>
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
