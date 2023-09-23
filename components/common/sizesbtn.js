"use client";

import React, { useEffect, useState } from "react";

const SizesBtn = ({ size, onChange, checked }) => {
  const { id, value, name } = size;

  return (
    <label
      className={`cursor-pointer text-base font-satoshi capitalize border-2  px-4 py-1.5 rounded-3xl transition-all duration-300 ${
        checked ? "bg-black text-white" : "bg-slate-100 text-black"
      }`}
      htmlFor={id}
    >
      <input
        id={id}
        type="radio"
        className="hidden"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default SizesBtn;
