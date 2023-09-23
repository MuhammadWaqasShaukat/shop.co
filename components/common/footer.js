import React from "react";
import NewsletterForm from "../forms/newsletterForm";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-row justify-between items-center bg-black px-16 py-9 rounded-3xl">
        <h2 className=" font-integral text-[40px] text-white w-2/3">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className=" w-1/3">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
