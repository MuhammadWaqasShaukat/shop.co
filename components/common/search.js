import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Search = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-start items-center gap-3 text-black/40 bg-[#f0f0f0] px-4 py-3 h-12 rounded-3xl">
        <MagnifyingGlassIcon className="h-6 w-6 " />
        <input
          className=" bg-transparent w-full focus:outline-none focus:border-none"
          type="text"
          name="serach-term"
          id="search-bar"
          placeholder="search for products..."
        />
      </div>
    </div>
  );
};

export default Search;
