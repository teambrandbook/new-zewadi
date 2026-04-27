import React from 'react';
import Image from 'next/image';

const ProductSection = () => {
  return (
    <section className="w-full bg-[#1f4b3f] py-6 lg:py-8">
      
      <div className="w-full px-6 lg:px-20">
        
        {/* Title */}
        <h2 className="text-[#fdf6ee] text-2xl lg:text-4xl font-serif mb-5">
          Our Product
        </h2>

        {/* Images (Short Height) */}
        <div className="relative flex items-center justify-center h-[240px] lg:h-[300px]">
          
          {/* Left */}
          <div className="absolute left-[35%] w-[150px] h-[200px] rounded-lg overflow-hidden opacity-90">
            <Image src="/home/productImg1.png" alt="" fill className="object-cover" />
          </div>

          {/* Right */}
          <div className="absolute right-[35%] w-[150px] h-[200px] rounded-lg overflow-hidden opacity-90">
            <Image src="/home/productImg2.png" alt="" fill className="object-cover" />
          </div>

          {/* Center */}
          <div className="relative w-[200px] h-[260px] rounded-lg overflow-hidden shadow-xl z-10">
            <Image src="/home/productImg3.png" alt="" fill className="object-cover" />
          </div>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-[#fdf6ee]/80 text-xs mt-5 max-w-[500px] mx-auto">
          Bridging the gap between technology and<br/> agriculture to redefine your food experience.
        </p>

      </div>
    </section>
  );
};

export default ProductSection;