import React from "react";
import bannerImage from "@/assets/hero_img.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-6 sm:px-6 lg:px-0 lg:py-8">
      <div className="grid grid-cols-1 items-center gap-8 rounded-xl bg-[#f3f3f3] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-2 lg:px-16">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2 className="mx-auto mb-4 max-w-md text-3xl font-bold leading-tight text-black sm:text-4xl lg:mx-0 lg:text-5xl">
            Books to freshen up your bookshelf
          </h2>

          <button className="btn btn-success mt-4 text-white sm:mt-6">
            <Link href="/books">View The List</Link>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src={bannerImage}
            alt="Banner"
            className="h-auto w-full max-w-[350px] object-contain sm:max-w-[400px] lg:max-w-[500px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;