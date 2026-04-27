import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start">
          <p className="text-[#3d634d] text-base lg:text-[22px] font-semibold font-['Inter'] mb-3">
            Zewadi Community
          </p>
          
          <h2 className="text-[#121414] text-4xl lg:text-[64px] font-bold font-['Playfair_Display'] leading-[1.1] mb-8">
            Eat Fresh. Live Well.
          </h2>
          
          <p className="text-[#444] text-sm lg:text-[15px] font-medium font-['Inter'] leading-relaxed mb-10 max-w-[480px]">
            This isn't just about food. It's about how we live, how we connect, how we grow one day at a time. The Zewadi community is made of people, just like you, trying to make better choices every day in their own way.
          </p>
          
          {/* Icons Row */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                {/* Replace with your specific SVG icon for Wellness */}
                <Image src="/home/wellness.png" alt="Wellness" width={40} height={40} />
              </div>
              <h3 className="text-[#121414] text-[16px] font-bold font-['Inter']">
                Wellness First
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                 {/* Replace with your specific SVG icon for Inclusive */}
                <Image src="/home/inclusive.png" alt="Inclusive" width={40} height={40} />
              </div>
              <h3 className="text-[#121414] text-[16px] font-bold font-['Inter']">
                Inclusive & Evolving
              </h3>
            </div>
          </div>

          <button className="bg-[#244d3a] text-white rounded-full pl-8 pr-1.5 py-1.5 flex items-center gap-5 hover:opacity-90 transition-all font-bold font-['Inter'] text-[14px]">
            Discover More
            <div className="w-9 h-9 rounded-full bg-[#b47800] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Right Content - Image Stack */}
        <div className="w-full lg:w-[55%] relative h-[450px] lg:h-[550px] mt-12 lg:mt-0">
          
          {/* 1. Dark Green Background Box (Far Right) */}
          <div className="absolute right-0 top-0 w-[40%] h-[95%] bg-[#1a3d2e] rounded-lg z-0" />

          {/* 2. Main Image (Middle Stack) */}
          <div className="absolute right-[5%] top-[15%] w-[65%] h-[80%] rounded-xl overflow-hidden shadow-2xl z-10">
            <Image 
              src="/home/communityBase.png" 
              alt="Sunset Field" 
              fill 
              className="object-cover" 
            />
            
            {/* 100% Organic Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#1a3d2e]/90 backdrop-blur-md px-6 py-4 rounded-4xl text-white flex items-center gap-4 z-20">
              <span className="text-3xl lg:text-4xl font-bold font-['Inter']">100%</span>
              <span className="text-[12px] lg:text-[14px] leading-tight font-medium opacity-90 uppercase tracking-wide">
                Organic<br/>products
              </span>
            </div>
          </div>

          {/* 3. Overlapping Small Image (Top Left) */}
          <div className="absolute left-0 top-10 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white">
            <Image 
              src="/home/communityBase1.png" 
              alt="Crops" 
              fill 
              className="object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;