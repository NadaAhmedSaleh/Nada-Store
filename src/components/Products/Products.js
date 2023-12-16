import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../service/api";

function Products() {
  const [products, setProducts] = useState([]);
  const colorVariables = [
    "--orange-color",
    "--red-color",
    "--blue-color",
    "--green-color",
    "--purple-color",
    "--yellow-color",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          color={colorVariables[index % colorVariables.length]}
        />
      ))}
    </div>
  );
}

export default Products;
