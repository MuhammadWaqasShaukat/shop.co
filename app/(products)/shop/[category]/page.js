import Filters from "@/components/filters/filters";
import ProductSection from "@/components/sections/productSection";
import React from "react";

const Category = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <Filters />
      </div>
      <ProductSection />;
    </div>
  );
};

export default Category;
