import React from "react";
import "./HomePage.scss";
import FiltersCard from "../../components/FiltersCard/FiltersCard";
import Products from "../../components/Products/Products";

function HomePage() {
  return (
    <div className="cards-container">
      <FiltersCard />
      <Products />
    </div>
  );
}

export default HomePage;
