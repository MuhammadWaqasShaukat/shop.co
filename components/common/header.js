"use client";

import React, { useRef, useState } from "react";
import Search from "./search";
import Link from "next/link";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuopen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center py-6  gap-5 sm:gap-10">
        {/* Left Side */}
        <div className="flex flex-row-reverse justify-start items-center gap-3 md:flex-row sm:gap-10 md:flex-1 ">
          <div>
            <h1 className=" text-2xl font-extrabold uppercase font-integral leading-none">
              Shop.co
            </h1>
          </div>
          <div className="md:flex-1">
            {/* small nav */}
            <nav>
              <button
                className="h-6 w-6  md:hidden flex"
                onClick={() => setMenuopen(!menuOpen)}
              >
                <Bars3Icon />
              </button>
              {menuOpen && (
                <>
                  <button
                    className="h-6 w-6"
                    onClick={() => setMenuopen(!menuOpen)}
                  >
                    <XMarkIcon />
                  </button>

                  <ul>
                    <li>
                      <Link href="#">Shop</Link>
                    </li>
                    <li>
                      <Link href="#">On Sale</Link>
                    </li>
                    <li>
                      <Link href="#">New Arrival</Link>
                    </li>
                    <li>
                      <Link href="#">Brands</Link>
                    </li>
                  </ul>
                </>
              )}

              <ul className="hidden flex-row justify-start items-center gap-6 md:flex">
                <li>
                  <Link href="#">Shop</Link>
                </li>
                <li>
                  <Link href="#">On Sale</Link>
                </li>
                <li>
                  <Link href="#">New Arrival</Link>
                </li>
                <li>
                  <Link href="#">Brands</Link>
                </li>
              </ul>
            </nav>
            {/* desktop nav */}
          </div>
        </div>
        {/* Right Side*/}
        <div className="flex flex-row justify-between w-full items-center gap-3 sm:gap-10 md:flex-1">
          <div className="flex-1">
            <button
              className="h-6 w-6  sm:hidden"
              onClick={() => setMenuopen(!menuOpen)}
            >
              <MagnifyingGlassIcon />
            </button>

            <div className="sm:block w-full hidden">
              {/* Search */}
              <Search />
            </div>
          </div>
          <div>
            <nav>
              <ul className="flex flex-row justify-between items-center gap-3">
                <li>
                  <Link href="#">
                    <ShoppingCartIcon className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <UserCircleIcon className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
