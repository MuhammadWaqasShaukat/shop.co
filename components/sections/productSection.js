"use client";

import React, { useEffect } from "react";
import ProductsGrid from "../grid/productsGrid";

const ProductSection = () => {
  let products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    products.fill("product", 0, 29);
  }, []);

  console.log(products);

  return (
    <div className=" flex flex-col items-stretch">
      <div className="flex flex-row justify-between items-center py-6">
        <h2 className="font-bold font-satoshi text-3xl">Casual</h2>
        <div>
          <span className=" space-x-2 mr-2 text-base font-satoshi text-black/60">
            Showing 1-10 of 1000 Products
          </span>
          <select className="text-base font-satoshi text-black font-semibold">
            <option>Most Popular</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <ProductsGrid products={products} cols={3} />

      {/* Pagination */}
    </div>
  );
};

export default ProductSection;
