import BreadCrumbs from "@/components/common/breadCrumbs";
import Filters from "@/components/filters/filters";
import React from "react";

const ShopLayout = ({ children }) => {
  return (
    <div className="lg:container mx-auto">
      <BreadCrumbs />
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default ShopLayout;
