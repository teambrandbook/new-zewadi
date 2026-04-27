import React from 'react';
import Image from 'next/image';

const HistorySection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-[#244d3a] rounded-[40px] lg:rounded-[50px] p-8 lg:p-20 w-full overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-end justify-between mb-16">
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
               <h2 className="text-white text-4xl lg:text-[48px] font-semibold font-['Playfair_Display'] leading-[1.2] uppercase text-left">
                  Where It Began
               </h2>
               <p className="text-white/80 text-sm lg:text-[14px] font-medium font-['Inter'] leading-relaxed max-w-[600px]">
                  More than just a meal, Zewadi is a growing story of connection, comfort, and everyday joy shared around food.
               </p>
            </div>
            
            {/* Arrow Buttons */}
            <div className="flex justify-end gap-4 shrink-0 lg:mb-4">
               <button className="w-[45px] h-[45px] rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
               </button>
               <button className="w-[45px] h-[45px] rounded-full bg-[#b47800] text-white hover:bg-[#8c5e00] flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
               </button>
            </div>
          </div>

          {/* Timeline Graphic */}
          <div className="relative w-full h-[1px] bg-white/30 my-16 flex items-center justify-between px-[10%]">
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative"><div className="w-3 h-3 bg-[#244d3a] rounded-full"></div></div>
             <div className="w-8 h-8 rounded-full bg-[#244d3a] border border-white flex items-center justify-center relative"><div className="w-3 h-3 bg-white rounded-full"></div></div>
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative"><div className="w-3 h-3 bg-[#244d3a] rounded-full"></div></div>
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative"><div className="w-3 h-3 bg-[#244d3a] rounded-full"></div></div>
          </div>

          {/* Images Grid/Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 items-stretch">
             
             {/* Small Image 1 */}
             <div className="col-span-1 relative h-[300px] lg:h-[422px] rounded-[20px] overflow-hidden">
                <Image src="/home/historyImg1.png" alt="History 1" fill className="object-cover" />
             </div>

             {/* Large Center Image */}
             <div className="col-span-1 md:col-span-2 relative h-[300px] lg:h-[422px] rounded-[20px] overflow-hidden shadow-2xl z-10">
                <Image src="/home/historyImg4.png" alt="History Main" fill className="object-cover" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#244d3a] rounded-[10px] p-6 text-white text-[12px] font-medium font-['Inter'] leading-relaxed shadow-lg">
                   Zewadi started with a simple thought—food should be more than just filling. It should bring people together, create small moments, and add meaning to daily life. That idea took root and kept growing, turning into more than we ever planned.
                </div>
             </div>

             {/* Small Image 3 */}
             <div className="hidden md:block col-span-1 relative h-[300px] lg:h-[422px] rounded-[20px] overflow-hidden">
                <Image src="/home/historyImg2.png" alt="History 2" fill className="object-cover" />
             </div>

             {/* Small Image 4 */}
             <div className="hidden md:block col-span-1 relative h-[300px] lg:h-[422px] rounded-[20px] overflow-hidden">
                <Image src="/home/historyImg3.png" alt="History 3" fill className="object-cover" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistorySection;
