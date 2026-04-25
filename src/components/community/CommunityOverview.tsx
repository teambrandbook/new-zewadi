"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";
import { Diamond, Users, Lightbulb } from "lucide-react";
import communityData from "@/data/community.json";

const iconMap: any = {
  Diamond: Diamond,
  Users: Users,
  Lightbulb: Lightbulb,
};

const WavyArrow = ({ className }: { className?: string }) => (
  <svg
    width="60"
    height="12"
    viewBox="0 0 60 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 6C5 6 7 2 11 2C15 2 17 10 21 10C25 10 27 2 31 2C35 2 37 10 41 10C45 10 47 6 51 6H59M59 6L54 2M59 6L54 10"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

const CommunityOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { overviewSection } = communityData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".overview-card", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      gsap.from(".overview-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Clipped Background & Image Layer */}
          <div className="relative bg-brand-green rounded-[3rem] md:rounded-[5rem] overflow-hidden flex flex-col md:flex-row min-h-[600px] shadow-2xl z-0">
            {/* Left: Image Column */}
            <div className="w-full md:w-[45%] relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image
                src={overviewSection.image}
                alt="Community Focus"
                fill
                className="overview-image object-cover"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Right: Content Column */}
            <div className="w-full md:w-[55%] p-10 md:p-16 md:pt-10 flex flex-col justify-start">
              {/* Header with Wavy SVGs */}
              <div className="flex items-center gap-6 mb-8 opacity-90 animate-fade-in">
                <WavyArrow className="rotate-180" />
                <span className="text-white text-sm font-bold tracking-[0.4em] uppercase">
                  {overviewSection.subtitle}
                </span>
                <WavyArrow />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-12 leading-tight animate-fade-in">
                {overviewSection.title}
              </h2>
            </div>
          </div>

          {/* Floating Cards Layer (Safely Positioned for Visibility) */}
          <div className="relative z-[100] mt-12 lg:-mt-32 px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto lg:ml-24">
              {overviewSection.cards.map((card: any, idx: number) => {
                const Icon = iconMap[card.icon];
                return (
                  <div
                    key={idx}
                    className="overview-card relative bg-[#F2F4F0] p-6 md:p-8 rounded-[2rem] shadow-2xl flex-1 flex flex-col justify-center min-h-[145px] border border-white/5 hover:-translate-y-2 transition-transform duration-500"
                  >
                    {/* Floating Icon Container */}
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full border border-gray-100 shadow-2xl flex items-center justify-center text-brand-green">
                      <Icon size={idx === 2 ? 22 : 24} className="stroke-[1.5px]" />
                    </div>

                    <div className="pl-6 md:pl-8">
                      <div className="text-gray-400 text-[10px] font-bold mb-1 tracking-widest uppercase">
                        {card.id}
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-brand-green mb-1 leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityOverview;
