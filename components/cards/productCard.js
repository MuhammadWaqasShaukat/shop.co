import React from "react";
import RatingStars from "../common/ratingStars";
import Image from "next/image";
import Badge from "../common/badge";

const ProductCard = () => {
  return (
    <div className="w-72 flex-col flex items-start justify-start gap-4">
      {/* image */}
      <div className="min-w-full h-auto bg-[#F2F0F1]">
        <Image src={"/product-10.png"} alt="image" width={1920} height={2880} />
      </div>
      {/*Details  */}
      <div className="flex flex-col justify-start items-start gap-2">
        <h3 className=" font-satoshi text-xl font-bold w-full truncate">
          T-Shirt with Tape Details
        </h3>
        <RatingStars />
        <div className="flex flex-row justify-start items-center gap-3">
          {/* Price */}
          <span className="block text-2xl font-bold font-satoshi ">$120</span>
          {/*Actual Price  */}
          <span className="block text-2xl font-bold font-satoshi text-black/40 line-through">
            $220
          </span>
          {/* Discount Percent */}
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
