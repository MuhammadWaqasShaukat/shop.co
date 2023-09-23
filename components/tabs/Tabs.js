"use client";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import ReviewCard from "../cards/reviewCard";

const tabs = [
  {
    label: "Product Details",
    id: "tab-1",
  },
  {
    label: "Rating & Reviews",
    id: "tab-2",
  },
  {
    label: "FAQs",
    id: "tab-3",
  },
];

const Tabs = () => {
  const [active, setActive] = useState(tabs[0]);

  const onTabSelect = (e) => {
    const selectedTabId = e.target.id;

    if (selectedTabId) {
      const selectedTab = tabs.find((tab) => tab.id === selectedTabId);
      setActive(selectedTab);
    } else return;
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-stretch items-center ">
        {tabs.map((tab) => (
          <button
            type="button"
            className={`flex-1 py-3 border-b ${
              active.id === tab.id ? "border-b-2 border-black" : ""
            }`}
            id={tab.id}
            key={tab.id}
            onClick={onTabSelect}
          >
            <span className="block text-center pointer-events-none">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab 1 */}
      {active.id === "tab-1" && (
        <div>
          <span>1</span>
        </div>
      )}
      {/* Tab 2 */}
      {active.id === "tab-2" && (
        <div className=" space-y-6">
          <div className="flex flex-row justify-between items-center mt-5 ">
            <span>All Reviews(451)</span>

            <div className="flex flex-row gap-2">
              <button className="h-12 w-12 bg-[#f0f0f0] self-center rounded-full grid place-items-center">
                <AdjustmentsVerticalIcon height={20} />
              </button>
              <div className="bg-[#f0f0f0] rounded-3xl  px-5 grid place-items-center">
                <select className=" bg-transparent px-2">
                  <option>Latest</option>
                </select>
              </div>
              <button className=" bg-[#000000]   rounded-full grid place-items-center text-white">
                <span className="text-white py-3 px-7">Write a Review</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((review, index) => (
              <ReviewCard key={index} />
            ))}
          </div>
        </div>
      )}
      {/* Tab 3 */}
      {active.id === "tab-3" && (
        <div>
          <span>3</span>
        </div>
      )}
    </div>
  );
};

export default Tabs;
