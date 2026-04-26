import React from 'react';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Header Section */}
        <h2 className="text-black text-4xl lg:text-[48px] font-semibold font-['Playfair_Display'] text-center mb-6 max-w-[600px]">
          The Experience of Zewadi
        </h2>
        <p className="text-[#3f4e50] text-sm lg:text-[14px] font-medium font-['Inter'] text-center max-w-[550px] mb-20 lg:mb-32">
          Every meal is more than just food - it's a moment to share, connect, and remember. With Zewadi, even the simplest choices become experiences worth holding on to.
        </p>

        {/* Experience Layout Wrapper */}
        <div className="relative w-full max-w-[1100px] flex flex-col items-center lg:min-h-[560px]">
          
          {/* SVG Connector Lines (Matches Zoomed Image) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Line for 01 (Top Left) */}
              <path d="M222 110 H 300 L 380 190" stroke="#9CB4AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Line for 02 (Top Right) */}
              <path d="M778 110 H 700 L 620 190" stroke="#9CB4AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Line for 03 (Bottom Left) */}
              <path d="M222 490 H 300 L 380 410" stroke="#9CB4AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Line for 04 (Bottom Right) */}
              <path d="M778 490 H 700 L 620 410" stroke="#9CB4AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Center Circular Image */}
          <div className="relative w-[280px] h-[280px] lg:mt-[110px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[8px] border-[#2D4A3E] shadow-2xl z-20 mb-12 lg:mb-0">
             <Image 
                src="/home/experienceImg1.png" 
                alt="Zewadi Experience" 
                fill 
                className="object-cover" 
             />
          </div>

          {/* Connector Dots */}
          <div className="hidden lg:flex absolute left-[368px] top-[178px] h-5 w-5 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-2 w-2 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute right-[368px] top-[178px] h-5 w-5 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-2 w-2 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute left-[368px] top-[400px] h-5 w-5 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-2 w-2 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute right-[368px] top-[400px] h-5 w-5 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-2 w-2 rounded-full bg-[#2D4A3E]" />
          </div>

          {/* Cards Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:absolute lg:inset-0 z-10 gap-8 lg:gap-0">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between lg:h-full">
              {/* Card 01 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[300px] lg:mt-12 lg:ml-4 shadow-sm">
                 <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">01</div>
                 <h3 className="text-black text-lg font-bold mb-2">Thoughtful Choices</h3>
                 <p className="text-[#121414] text-xs font-medium leading-relaxed">We handle what goes in, so you don't have to overthink it.</p>
              </div>

              {/* Card 03 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[300px] lg:mb-12 lg:ml-4 shadow-sm">
                 <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">03</div>
                 <h3 className="text-black text-lg font-bold mb-2">Meaningful Moments</h3>
                 <p className="text-[#121414] text-xs font-medium leading-relaxed">It's often the smallest moments that matter most.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between lg:h-full lg:items-end">
              {/* Card 02 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[300px] lg:mt-12 lg:mr-4 shadow-sm">
                 <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">02</div>
                 <h3 className="text-black text-lg font-bold mb-2">Made for Sharing</h3>
                 <p className="text-[#121414] text-xs font-medium leading-relaxed">Zewadi is best enjoyed together with those you love.</p>
              </div>

              {/* Card 04 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[300px] lg:mb-12 lg:mr-4 shadow-sm">
                 <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">04</div>
                 <h3 className="text-black text-lg font-bold mb-2">A Better Way of Living</h3>
                 <p className="text-[#121414] text-xs font-medium leading-relaxed">It blends into your life effortlessly, without any fuss.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
