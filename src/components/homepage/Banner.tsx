import React from "react";
import bannerImage from "@/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4 items-center bg-[#f3f3f3] rounded-xl px-16 py-10">

        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold leading-tight text-black max-w-md mb-4">
            Books to freshen up  your bookshelf
          </h2>

          <button className="btn btn-success mt-6 text-white">
            View The List
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src={bannerImage}
            alt="Banner"
            className="h-auto w-[500px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
