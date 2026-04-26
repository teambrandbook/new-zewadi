"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";
import { Leaf, ArrowRight } from "lucide-react";
import communityData from "@/data/community.json";

const CommunityStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { statsSection } = communityData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Image with Blue Border */}
          <div className="lg:col-span-5 animate-in relative group">
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-xl">
              <Image
                src={statsSection.largeImage}
                alt="Community Activity"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Top Card: Community Promo */}
            <div className="bg-white rounded-[1.5rem] shadow-2xl shadow-black/5 overflow-hidden border border-gray-100 flex flex-col md:flex-row animate-in h-full">
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center text-brand-primary mb-6">
                  <Leaf size={28} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-brand-green mb-4">
                  {statsSection.card.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-inter">
                  {statsSection.card.description}
                </p>
                <button className="border border-brand-green/20 text-brand-green font-bold px-8 py-3 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center gap-2 w-fit group">
                  {statsSection.card.ctaText}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative w-full md:w-[280px] h-[300px] md:h-auto overflow-hidden">
                <Image
                  src={statsSection.card.image}
                  alt="Outdoor Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom: Stats Bar */}
            <div className="bg-brand-green rounded-[2.5rem] p-8 md:p-12 animate-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsSection.stats.map((stat: any, index: number) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
