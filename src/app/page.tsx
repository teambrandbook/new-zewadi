"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/components/home/Hero";
import Card from "@/components/common/Card";
import { Zap, Shield, Smartphone, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";
import gsap from "@/lib/gsap";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Smartphone,
  Cpu,
};

export default function Home() {
  const { features, ctaSection } = homeData;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, visibility: "hidden" },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Hero />
      
      <section ref={sectionRef} className="py-24 bg-brand-dark/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {features.title.split("Modern")[0]}
              <span className="text-brand-primary">Modern</span>
              {features.title.split("Modern")[1]}
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              {features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.items.map((feature, i) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={i} className="feature-card opacity-0 invisible">
                  <Card
                    title={feature.title}
                    description={feature.description}
                    icon={IconComponent ? <IconComponent size={24} /> : null}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden p-12 md:p-24 text-center">
             <div className="absolute inset-0 bg-brand-primary -z-10" />
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 -z-10" />
             
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 whitespace-pre-line">
               {ctaSection.title}
             </h2>
             <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
               {ctaSection.description}
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-10 py-5 bg-white text-brand-primary font-bold rounded-full hover:bg-opacity-90 transition-all scale-105 shadow-xl">
                 {ctaSection.primaryBtn}
               </button>
               <button className="px-10 py-5 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                 {ctaSection.secondaryBtn}
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
