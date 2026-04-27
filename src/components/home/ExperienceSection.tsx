import React from 'react';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

        {/* Header Section */}
        <h2 className="text-black text-4xl lg:text-[48px] font-semibold font-['Playfair_Display'] text-center mb-6 max-w-[600px]m fade-in">
          The Experience of Zewadi
        </h2>
        <p className="text-[#3f4e50] text-sm lg:text-[14px] font-medium font-['Inter'] text-center max-w-[550px] mb-20 lg:mb-32 fade-in">
          Every meal is more than just food - it's a moment to share, connect, and remember. With Zewadi, even the simplest choices become experiences worth holding on to.
        </p>

        {/* Experience Layout Wrapper */}
        <div className="relative w-full max-w-[1100px] flex flex-col items-center lg:min-h-[600px]">

          {/* SVG Connector Lines - Adjusted for shorter gap */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1100 600" fill="none">

              {/* Top Left */}
              <path d="M320 100 H 400 L 440 170"
                stroke="#9CB4AB" strokeWidth="1.5" strokeLinecap="round" />

              {/* Top Right */}
              <path d="M780 110 H 700 L 660 170"
                stroke="#9CB4AB" strokeWidth="1.5" strokeLinecap="round" />

              {/* Bottom Left */}
              <path d="M320 490 H 400 L 440 430"
                stroke="#9CB4AB" strokeWidth="1.5" strokeLinecap="round" />

              {/* Bottom Right */}
              <path d="M780 490 H 700 L 660 430"
                stroke="#9CB4AB" strokeWidth="1.5" strokeLinecap="round" />

            </svg>
          </div>

          {/* Center Circular Image */}
          <div className="relative w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden  shadow-2xl z-20 mb-12 lg:mb-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
            <Image
              src="/home/experienceImg1.png"
              alt="Zewadi Experience"
              fill
              className="object-cover"
            />
          </div>

          {/* Connector Dots - Re-positioned for the shorter gap */}
          <div className="hidden lg:flex absolute left-[432px] top-[160px] h-4 w-4 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-1.5 w-1.5 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute right-[432px] top-[160px] h-4 w-4 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-1.5 w-1.5 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute left-[432px] bottom-[160px] h-4 w-4 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-1.5 w-1.5 rounded-full bg-[#2D4A3E]" />
          </div>
          <div className="hidden lg:flex absolute right-[432px] bottom-[160px] h-4 w-4 items-center justify-center rounded-full border border-[#9CB4AB] bg-white z-30">
            <div className="h-1.5 w-1.5 rounded-full bg-[#2D4A3E]" />
          </div>

          {/* Cards Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:absolute lg:inset-0 z-10 gap-8 lg:gap-0">

            {/* Left Column - Using justify-center and gap-8 to shorten the space */}
            <div className="flex flex-col justify-center lg:h-full gap-8">
              {/* Card 01 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[320px] shadow-sm">
                <div className="absolute top-[-62px] right-[-16px] w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">01</div>
                <h3 className="text-black text-lg font-bold mb-2">Thoughtful Choices</h3>
                <p className="text-[#121414] text-xs font-medium leading-relaxed">We handle what goes in, so you don't have to overthink it just enjoy food that’s simple, balanced, and made right.</p>
              </div>

              {/* Card 03 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[320px] shadow-sm">
                <div className="absolute bottom-[-55px] right-[-16px] w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">03</div>
                <h3 className="text-black text-lg font-bold mb-2">Meaningful Moments</h3>
                <p className="text-[#121414] text-xs font-medium leading-relaxed">It's often the smallest moments that matter most the quiet, everyday ones that stay with you.</p>
              </div>
            </div>

            {/* Right Column - Using justify-center and gap-8 to shorten the space */}
            <div className="flex flex-col justify-center lg:h-full lg:items-end gap-8">
              {/* Card 02 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[320px] shadow-sm">
                <div className="absolute top-[-62px] left-[-16px] w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">02</div>
                <h3 className="text-black text-lg font-bold mb-2">Made for Sharing</h3>
                <p className="text-[#121414] text-xs font-medium leading-relaxed">Zewadi is best enjoyed together, because good food is always better when shared</p>
              </div>

              {/* Card 04 */}
              <div className="relative bg-[#e6ceae] rounded-xl p-6 lg:w-[320px] shadow-sm">
                <div className="absolute bottom-[-62px] left-[-16px] w-10 h-10 bg-[#2D4A3E] rounded-full text-white flex items-center justify-center font-semibold text-xs z-30">04</div>
                <h3 className="text-black text-lg font-bold mb-2">A Better Way of Living</h3>
                <p className="text-[#121414] text-xs font-medium leading-relaxed">It blends into your life effortlessly, without any fuss just simple, thoughtful goodness every day.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
