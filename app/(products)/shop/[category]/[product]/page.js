"use client";

import Badge from "@/components/common/badge";
import QuantityCounter from "@/components/common/quantityCounter";
import RatingStars from "@/components/common/ratingStars";
import SizesBtn from "@/components/common/sizesbtn";
import ProductDetail from "@/components/sections/ProductDetail";
import Tabs from "@/components/tabs/Tabs";
import React, { useEffect, useState } from "react";

const sizes = [
  {
    id: "size-btn-sm",
    value: "small",
    name: "size",
  },
  {
    id: "size-btn-md",
    value: "medium",
    name: "size",
  },
  {
    id: "size-btn-lg",
    value: "large",
    name: "size",
  },
  {
    id: "size-btn-xl",
    value: "x-large",
    name: "size",
  },
];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const onSizeChange = (ev) => {
    ev.preventDefault();

    let _selected = {
      id: ev.target.id,
      value: ev.target.value,
      name: ev.target.name,
    };

    setSelectedSize(_selected);
  };

  useEffect(() => {}, [selectedSize]);

  return (
    <div className="flex flex-col gap-10">
      <div className=" flex flex-row justify-start items-start gap-5">
        <div className="flex-1">
          <ProductDetail />
        </div>
        <div className="flex-1">
          <h2 className=" text-3xl tracking-tight font-bold font-integral pb-3">
            One Life Graphic T-Shirt
          </h2>
          <RatingStars />
          <div className="flex flex-row justify-start items-center gap-3 pt-3">
            {/* Price */}
            <span className="block text-2xl font-bold font-satoshi ">$120</span>
            {/*Actual Price  */}
            <span className="block text-2xl font-bold font-satoshi text-black/40 line-through">
              $220
            </span>
            {/* Discount Percent */}
            <Badge />
          </div>
          {/* Short Description */}
          <p className=" pt-5 text-base font-satoshi text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <form className=" mt-5">
            {/* Colors */}
            <div></div>
            {/* Sizez */}
            <div className="flex flex-col justify-start items-start gap-4">
              <div className=" h-0.5 w-full bg-black/10"></div>
              <span className=" font-satoshi text-base text-black/60">
                Choose Size
              </span>

              <div className=" flex flex-row justify-start items-center gap-3">
                {sizes.map((size, index) => (
                  <SizesBtn
                    key={index}
                    size={size}
                    onChange={onSizeChange}
                    checked={selectedSize.id === size.id}
                  />
                ))}
              </div>

              <div className=" h-0.5 w-full bg-black/10"></div>

              <div className="w-full grid grid-cols-3 grid-rows-1 gap-5">
                {/* counter */}

                <QuantityCounter />
                <button
                  type="submit"
                  className=" col-span-2 bg-black rounded-3xl text-white text-center py-3 px-5 font-satoshi text-base font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
    </div>
  );
};

export default Product;
