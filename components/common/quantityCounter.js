"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-row justify-between items-center bg-[#F0F0F0] rounded-3xl py-3 px-5">
      <button
        onClick={() => {
          setQuantity(quantity - 1);
        }}
      >
        <MinusIcon height={24} strokeWidth={3} />
      </button>
      <span className=" font-satoshi text-base font-medium">{quantity}</span>
      <button onClick={() => {}}>
        <PlusIcon
          height={24}
          strokeWidth={2}
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        />
      </button>
    </div>
  );
};

export default QuantityCounter;
