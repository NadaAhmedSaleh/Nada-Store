import React from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  return (
    <div className="products-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Products;
