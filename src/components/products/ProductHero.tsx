"use client";

import React from "react";
import productsData from "@/data/products.json";

const ProductHero = () => {
  const { hero } = productsData;

  return (
    <section className="bg-[#1f4d3a] pt-20 sm:pt-24 pb-0 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="h-[140px] sm:h-[180px]" />
        
        <div className="hero-box relative -mb-px max-w-[440px] rounded-t-[24px] bg-white px-7 py-7 sm:px-10 sm:py-10 z-30">
          <h1 className="font-playfair text-[2.25rem] md:text-[2.75rem] font-bold leading-none text-black mb-4">
            {hero.title}
          </h1>
          <p className="mt-4 text-base md:text-lg font-bold text-[#1A4331] font-inter">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
