"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm } from "react-hook-form";

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col justify-between items-stretch gap-4">
        <div className="bg-white capitalize rounded-3xl  py-3 px-6 w-full flex flex-row gap-3 justify-between items-center">
          <EnvelopeIcon height={24} width={24} className="text-black/40" />
          <input
            className="w-full border-none outline-none"
            type="email"
            {...register("email")}
            placeholder=" Enter Your Email"
          />
        </div>
        <input
          type="submit"
          value="Subscribe to news letter"
          className=" text-black  capitalize rounded-3xl bg-white py-3 font-satoshi  text-base"
        />
      </div>
    </form>
  );
};

export default NewsletterForm;
