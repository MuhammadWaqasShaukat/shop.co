import Filters from "@/components/filters/filters";
import ProductSection from "@/components/sections/productSection";
import React from "react";

const Shop = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <Filters />
      </div>
      <div className=" col-span-3">
        <ProductSection />
      </div>
    </div>
  );
};

export default Shop;
