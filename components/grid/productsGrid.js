import React from "react";
import ProductCard from "../cards/productCard";

const ProductsGrid = ({ products = [], cols = 4 }) => {
  if (cols === 4) {
    return (
      <div className="grid grid-cols-4 gap-5">
        {products?.map((product, key) => (
          <ProductCard key={key} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-3 gap-5">
        {products?.map((product, key) => (
          <ProductCard key={key} />
        ))}
      </div>
    );
  }
};

export default ProductsGrid;
