import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1] py-24">
      <div className="container mx-auto flex-row justify-between items-center">
        <div className="w-1/2 flex flex-col justify-start items-start gap-8">
          <h2 className="text-[64px] font-extrabold font-integral leading-none">
            Find Clothes that matches your style
          </h2>
          <span className=" text-base font-satoshi font-normal text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
          <div className="flex flex-row">
            <div className=" bg-black text-white px-14 py-4 rounded-full">
              <Link href="#">Shop Now</Link>
            </div>
          </div>
          <div className="flex-1 flex flex-row justify-between items-center gap-8  mt-4">
            <div className="flex flex-col items-start justify-start">
              <span className=" font-satoshi text-4xl font-bold">200+</span>
              <p className="text-base font-satoshi font-normal text-black/60">
                International Brands
              </p>
            </div>
            {/* divider */}
            <div className="w-[1px] h-full bg-black/10"></div>
            <div className="flex flex-col items-start justify-start">
              <span className=" font-satoshi text-4xl font-bold">2,000+</span>
              <p className="text-base font-satoshi font-normal text-black/60">
                High-Quality Products
              </p>
            </div>
            <div className="w-[1px] h-full bg-black/10 border-l-2"></div>
            <div className="flex flex-col items-start justify-start">
              <span className=" font-satoshi text-4xl font-bold">30,0000+</span>
              <p className="text-base font-satoshi font-normal text-black/60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row"></div>
      </div>
    </div>
  );
};

export default Hero;
