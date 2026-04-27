import React from 'react';
import Image from 'next/image';

const ProductSection = () => {
  return (
    <section className="w-full bg-[#1f4b3f] py-6 lg:py-8">
      
      <div className="w-full px-6 lg:px-20">
        
        {/* Title */}
        <h2 className="text-[#fdf6ee] text-2xl lg:text-4xl font-serif mb-5 fade-in">
          Our Product
        </h2>

        {/* Images */}
        <div className="relative flex items-center justify-center h-[240px] sm:h-[260px] lg:h-[300px]">
          
          {/* Left Image */}
          <div className="absolute left-2 sm:left-[20%] lg:left-[35%] 
                          w-[120px] sm:w-[140px] lg:w-[150px] 
                          h-[160px] sm:h-[180px] lg:h-[200px] 
                          rounded-lg overflow-hidden opacity-90">
            <Image 
              src="/home/productImg1.png" 
              alt="Product Left" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Right Image */}
          <div className="absolute right-2 sm:right-[20%] lg:right-[35%] 
                          w-[120px] sm:w-[140px] lg:w-[150px] 
                          h-[160px] sm:h-[180px] lg:h-[200px] 
                          rounded-lg overflow-hidden opacity-90">
            <Image 
              src="/home/productImg2.png" 
              alt="Product Right" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Center Image */}
          <div className="relative 
                          w-[160px] sm:w-[180px] lg:w-[200px] 
                          h-[220px] sm:h-[240px] lg:h-[260px] 
                          rounded-lg overflow-hidden shadow-xl z-10">
            <Image 
              src="/home/productImg3.png" 
              alt="Product Center" 
              fill 
              className="object-cover" 
            />
          </div>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-[#fdf6ee]/80 text-xs mt-5 max-w-[500px] mx-auto fade-in">
          Bridging the gap between technology and<br/> agriculture to redefine your food experience.
        </p>

      </div>
    </section>
  );
};

export default ProductSection;