import React from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  return (
    <div className="products-container">
      <ProductCard color={"--red-color"} />
      <ProductCard color={"--orange-color"} />
      <ProductCard color={"--green-color"} />
      <ProductCard color={"--blue-color"} />
      <ProductCard color={"--red-color"} />
      <ProductCard color={"--orange-color"} />
      <ProductCard color={"--red-color"} />
      <ProductCard color={"--orange-color"} />
    </div>
  );
}

export default Products;
