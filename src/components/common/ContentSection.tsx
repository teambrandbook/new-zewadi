import React from 'react';

type ContentProps = {
  title: string;
  subtitle: string;
}

const ContentSection = ({ title, subtitle }: ContentProps) => {
  return (
    // items-end keeps the box pinned to the bottom of the green section
    <section className="relative w-full bg-[#1B3C2E] min-h-[400px] flex items-end">
      
      <div className="container mx-auto px-6 lg:px-20">
        <div 
          /* Removed translate-y to prevent overflow from the green section */
          className="bg-white p-8 md:p-14 max-w-lg "
          style={{ borderRadius: '16px 16px 0 0' }}
        >
          {/* Title: Playfair Display + Black Color */}
          <h2 className="text-4xl md:text-[52px] font-['Playfair_Display'] font-bold text-black mb-3 leading-[1.1]">
            {title}
          </h2>
          
          {/* Subtitle: DM Sans + Greenish Tint */}
          <p className="text-[14px] font-bold text-[#0e8f39] tracking-normal font-['DM_Sans']">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;