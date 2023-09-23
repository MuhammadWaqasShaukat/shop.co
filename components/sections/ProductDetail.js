import React from "react";
import DetailImage from "../imageView/detailImage";

const ProductDetail = () => {
  return (
    <div className=" flex flex-row justify-between items-start gap-5">
      <DetailImage />
      <div className="flex-1"></div>
    </div>
  );
};

export default ProductDetail;
