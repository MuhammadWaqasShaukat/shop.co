import Hero from "@/components/Hero/HeroSection";
import ProductCard from "@/components/cards/productCard";
import Header from "@/components/common/header";
import Partners from "@/components/common/partners";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />
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
    </main>
  );
}
