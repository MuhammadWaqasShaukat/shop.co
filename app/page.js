import Hero from "@/components/Hero/HeroSection";
import ProductCard from "@/components/cards/productCard";
import TestimonialCard from "@/components/cards/testimonialCard";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Partners from "@/components/common/partners";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Partners />
      <div className="container mx-auto flex flex-col justify-between items-center gap-14 py-16">
        <h2 className=" font-integral text-5xl font-bold">New Arrivals</h2>
        <div className="flex flex-row justify-between items-center gap-5">
          {[1, 2, 3, 4].map((product, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <Link
          href="#"
          className="border-2 rounded-full px-20 py-4 text-base font-satoshi font-medium"
        >
          View All
        </Link>
      </div>
      <div className="container mx-auto flex flex-col justify-between items-center gap-14 py-16">
        <h2 className=" font-integral text-5xl font-bold">Top Seller</h2>
        <div className="flex flex-row justify-between items-center gap-5">
          {[1, 2, 3, 4].map((product, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <Link
          href="#"
          className="border-2 rounded-full px-20 py-4 text-base font-satoshi font-medium"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col  mx-auto container gap-10">
        <div className="flex flex-row justify-between items-center ">
          <h2 className=" text-5xl font-integral font-bold">
            our happy customers
          </h2>
          <div className="flex flex-row items-center justify-between gap-4">
            <Link href="#">
              <ArrowLeftIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </main>
  );
}
