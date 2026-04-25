"use client";

import React, { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import communityData from "@/data/community.json";

const CommunityHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { hero } = communityData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".reveal-text",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
      );

      tl.fromTo(
        ".reveal-button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=1"
      );

      // Animate clusters
      tl.fromTo(
        ".triangle-cluster",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 2, stagger: 0.3 },
        "-=1.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-brand-green flex flex-col items-center justify-center pt-32 overflow-hidden text-center text-white"
    >
      {/* Background Geometric Clusters (Design-aligned triangles) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Cluster */}
        <div className="triangle-cluster absolute top-[-10%] right-[-5%] w-[40%] h-[50%] opacity-0">
           <Triangle color="var(--color-brand-primary)" size="w-64 h-64" rotate="rotate-45" top="10%" right="10%" opacity="opacity-20" />
           <Triangle color="white" size="w-48 h-48" rotate="rotate-12" top="20%" right="20%" opacity="opacity-10" />
           <Triangle color="var(--color-brand-primary)" size="w-32 h-32" rotate="rotate-[-15deg]" top="5%" right="30%" opacity="opacity-30" />
        </div>

        {/* Bottom Right Cluster */}
        <div className="triangle-cluster absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] opacity-0">
           <Triangle color="var(--color-brand-primary)" size="w-[300px] h-[300px]" rotate="rotate-[20deg]" bottom="10%" right="5%" opacity="opacity-20" />
           <Triangle color="white" size="w-[200px] h-[200px]" rotate="rotate-[-10deg]" bottom="20%" right="15%" opacity="opacity-10" />
           <Triangle color="var(--color-brand-primary)" size="w-48 h-48" rotate="rotate-[45deg]" bottom="5%" right="25%" opacity="opacity-15" />
           <Triangle color="white" size="w-32 h-32" rotate="rotate-[120deg]" bottom="30%" right="10%" opacity="opacity-5" />
        </div>

        {/* Left Clusters */}
        <div className="triangle-cluster absolute top-[20%] left-[-5%] w-[30%] h-[40%] opacity-0">
          <Triangle color="var(--color-brand-primary)" size="w-48 h-48" rotate="rotate-[-30deg]" top="10%" left="10%" opacity="opacity-20" />
          <Triangle color="white" size="w-32 h-32" rotate="rotate-[15deg]" top="40%" left="5%" opacity="opacity-10" />
        </div>

        <div className="triangle-cluster absolute bottom-[10%] left-[5%] w-[20%] h-[30%] opacity-0">
          <Triangle color="var(--color-brand-primary)" size="w-40 h-40" rotate="rotate-[60deg]" bottom="0" left="0" opacity="opacity-15" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="reveal-text text-5xl md:text-[5.5rem] font-serif font-medium leading-[1.1] mb-8 tracking-tight">
          {hero.title} <span className="text-brand-primary font-normal">{hero.titleAccent}</span>
        </h1>
        
        <p className="reveal-text text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-sans opacity-80">
          {hero.description}
        </p>

        <div className="reveal-button">
          <button className="bg-[#E2D1A1] text-[#1A4331] font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto group shadow-2xl">
            {hero.ctaText}
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Subtle overlay to improve legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green/20 via-transparent to-brand-green/40 -z-10" />
    </section>
  );
};

const Triangle = ({ color, size, rotate, top, right, bottom, left, opacity }: any) => (
  <div
    className={cn("absolute", size, rotate, opacity)}
    style={{
      backgroundColor: color,
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      top, right, bottom, left
    }}
  />
);

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default CommunityHero;
