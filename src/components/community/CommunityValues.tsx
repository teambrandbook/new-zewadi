"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
      // Smooth Fade-In for Heading
      gsap.from(".value-heading", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Premium Staggered Fade-Up for Cards
      gsap.from(".value-card", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.15,
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
        <div className="relative w-full max-w-7xl mx-auto bg-[#F3F7F2] rounded-[2rem] md:rounded-[2rem] py-16 px-8 md:py-24 md:px-20">

          {/* Background Layer with Image */}
          {valuesGridSection.backgroundImage && (
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-[3rem] md:rounded-[5rem] z-0">
              <Image
                src={valuesGridSection.backgroundImage}
                alt="Background Pattern"
                fill
                className="object-cover opacity-50 transition-opacity duration-700"
                priority
              />
              {/* White Overlay to soften the image */}
              <div className="absolute inset-0 bg-white/80 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[#F3F7F2]/40" />
            </div>
          )}

          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">

            {/* Header Content - Direct Color for debugging */}
            <div className="value-heading flex flex-col justify-start pt-12 relative z-30">
              <h2 className="text-3xl md:text-4xl lg:text-[52px] font-playfair font-semibold text-[#1A4331] leading-[1.1] whitespace-pre-line tracking-tight">
                {valuesGridSection.title}
              </h2>
            </div>

            {/* Value Cards */}
            {valuesGridSection.cards.map((card: any, idx: number) => {
              const Icon = iconMap[card.icon];
              return (
                <div
                  key={idx}
                  className="value-card bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col items-start aspect-square relative z-30"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#1A4331]/20 flex items-center justify-center text-[#1A4331] mb-8">
                    <Icon size={28} className="stroke-[1.5px]" />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-[#1A4331] mb-4 leading-tight font-inter">
                    {card.title}
                  </h4>
                  <p className="text-[#333333] text-xs md:text-sm leading-relaxed max-w-[240px] font-medium font-inter">
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
