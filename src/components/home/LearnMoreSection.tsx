import React from 'react';
import Image from 'next/image';

const LearnMoreSection = () => {
  return (
    <section className="relative w-full">
      {/* Outer Container: 
          We use a grid or flex to ensure the green background 
          only covers the top portion of the component.
      */}
      <div className="bg-[#244d3a] w-full pt-0 pb-0 lg:pt-18 lg:pb-0">
        <div className="container mx-auto px-6 lg:px-20 relative flex flex-col lg:flex-row items-center">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10 ">
            <h2 className="text-[#d9c5a7] text-4xl lg:text-[54px] font-bold font-['Playfair_Display'] leading-[1.1] mb-6 tracking-tight">
              LEARN MORE<br />
              ABOUT ZEWADI
            </h2>
            
            <p className="text-white/90 text-sm lg:text-[16px] font-normal font-['Inter'] leading-relaxed mb-10 max-w-[440px]">
              Zewadi is deeper than what you see on the surface. Get to know the thinking, the purpose, and the story behind it all.
            </p>

            {/* Button with exact Gold color from image */}
            <button className="bg-[#b47800] text-white rounded-full pl-7 pr-2 py-2 flex items-center gap-5 hover:bg-[#a36d00] transition-all group shadow-lg">
              <span className="font-bold text-[14px] font-['Inter']">Explore More</span>
              <div className="w-9 h-9 rounded-full bg-[#244d3a] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Right Content Column */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 lg:h-[350px]">
            {/* The Image Container:
                Pushed down using lg:top-1/2 and translate-y to sit 
                exactly on the edge of the green/white divide.
            */}
            <div className="relative w-full h-[200px] lg:h-[380px] lg:absolute lg:top-0 lg:translate-y-12 z-20 rounded-[45px] overflow-hidden shadow-2xl">
              <Image 
                src="/home/learnMoreBg.png" 
                alt="Zewadi Flowers" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Discount Badge - Floating over the image edge */}
            <div className="absolute -top-10 left-6 lg:-left-12 lg:top-12 w-28 h-28 lg:w-[135px] lg:h-[135px] bg-[#3a6351] rounded-full flex flex-col items-center justify-center shadow-2xl z-30 text-white">
              <span className="text-2xl lg:text-[36px] font-bold font-['Inter'] leading-none">30%</span>
              <span className="text-[10px] lg:text-[13px] font-medium opacity-90 mt-1 uppercase tracking-widest">Discounts</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer for the bottom "White" area to allow the image to overlap into it */}
      <div className="h-24 lg:h-48 bg-white w-full" />
    </section>
  );
};

export default LearnMoreSection;