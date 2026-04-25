"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";
import communityData from "@/data/community.json";

const CommunityGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { gridSection } = communityData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grid-item", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          grid: [2, 3],
          from: "start"
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".footer-text", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gridSection.items.map((item: any, index: number) => (
            <div key={index} className="grid-item aspect-square overflow-hidden shadow-lg border border-gray-100">
              {item.type === "image" ? (
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={item.src}
                    alt="Community Grid"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-brand-green flex flex-col items-center justify-center p-8 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer-text mt-16 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed italic opacity-90">
            {gridSection.footerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityGrid;
