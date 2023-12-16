import React from "react";
import './App.scss';
import FiltersCard from "./components/FiltersCard/FiltersCard";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <FiltersCard />
      <Products />
    </div>
  );
}

export default App;
