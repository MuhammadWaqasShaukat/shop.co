import BreadCrumbs from "@/components/common/breadCrumbs";
import React from "react";

const ShopLayout = ({ children }) => {
  return (
    <div className="container">
      <BreadCrumbs />
      {children}
    </div>
  );
};

export default ShopLayout;
