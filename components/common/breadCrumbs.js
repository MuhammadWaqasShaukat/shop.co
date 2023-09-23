"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const BreadCrumbs = () => {
  const pathname = usePathname();
  let constructedPath = "";
  const routeSegments = pathname.split("/").filter((segment) => segment != "");

  console.log(routeSegments);

  return (
    <div className="flex flex-row gap-4 justify-start items-center">
      {routeSegments?.map((segment, index) => {
        let crumb = "";
        constructedPath += segment;

        if (index !== routeSegments.length - 1) {
          constructedPath += "/";
          crumb = (
            <Link key={index} href={"#"}>
              {segment} /
            </Link>
          );
        } else {
          crumb = <span key={index}> {segment}</span>;
        }
        return crumb;
      })}
    </div>
  );
};

export default BreadCrumbs;
