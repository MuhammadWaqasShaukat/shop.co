"use client";

import Image from "next/image";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const DetailImage = () => {
  return (
    <div className=" w-full">
      <ReactImageGallery
        items={images}
        showThumbnails
        thumbnailPosition="left"
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
      />
      {/* <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div className=" col-span-1 flex flex-col justify-between gap-5">
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src={"/product-10.png"}
              alt="image"
              width={192}
              height={288}
            />
          </div>
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src={"/product-10.png"}
              alt="image"
              width={192}
              height={2880}
            />
          </div>
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src={"/product-10.png"}
              alt="image"
              width={1920}
              height={2880}
            />
          </div>
        </div>
        <div className=" col-span-3 row-span-3  rounded-3xl overflow-hidden">
          <div>
            <Image
              src={"/product-10.png"}
              alt="image"
              width={1920}
              height={2880}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailImage;
