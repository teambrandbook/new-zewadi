"use client";

import React, { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { Heart, Clock, Leaf, LayoutGrid, Layers } from "lucide-react";
import communityData from "@/data/community.json";

const iconMap: any = {
  Heart: Heart,
  Clock: Clock,
  Leaf: Leaf,
  LayoutGrid: LayoutGrid,
  Layers: Layers,
};

const CommunityValues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { valuesGridSection } = communityData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".value-heading", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (!valuesGridSection) return null;

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative w-full max-w-7xl mx-auto bg-[#F2F8F0] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 overflow-hidden min-h-[800px]">
          
          {/* Subtle Leaf Pattern Overlay (Elegant & Large) */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden">
             {[...Array(8)].map((_, i) => (
                <Leaf 
                   key={i} 
                   size={400} 
                   className="absolute stroke-[1px]" 
                   style={{
                      left: `${(i % 3) * 40 - 10}%`,
                      top: `${Math.floor(i / 3) * 50 - 10}%`,
                      transform: `rotate(${i * 45}deg)`
                   }}
                />
             ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-x-12 lg:gap-y-8 items-stretch">
            
            {/* Header Content */}
            <div className="value-heading flex flex-col justify-start pt-12 pr-8 lg:pr-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-green leading-[1.1] whitespace-pre-line tracking-tight">
                {valuesGridSection.title}
              </h2>
            </div>

            {/* Value Cards */}
            {valuesGridSection.cards.map((card: any, idx: number) => {
              const Icon = iconMap[card.icon];
              return (
                <div
                  key={idx}
                  className="value-card bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col items-start min-h-[320px]"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-green/20 flex items-center justify-center text-brand-green mb-10 group transition-colors">
                    <Icon size={28} className="stroke-[1.5px]" />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-brand-green mb-5">
                    {card.title}
                  </h4>
                  <p className="text-gray-900/70 text-sm md:text-[15px] leading-relaxed max-w-[260px] font-medium">
                    {card.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityValues;
