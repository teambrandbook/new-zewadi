"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { animatePopUp, animateFadeInLeft, animateSwipeReveal, animateCounter } from "@/lib/gsap";
import { Leaf, ArrowRight } from "lucide-react";
import communityData from "@/data/community.json";

const CommunityStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { statsSection } = communityData as any;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // 1. Icon Pop Up
      animatePopUp(iconRef.current, {}, tl);

      // 2. Text Content Stagger Fade-in from Left
      animateFadeInLeft(".text-animate-left", {}, tl, "-=0.4");

      // 3. Image Swipe Reveal
      animateSwipeReveal(imageRevealRef.current, {}, tl, "-=1");

      // 4. Large Image Entrance (Replacing hacky script)
      tl.fromTo("#large-img", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=1"
      );

      // 5. Stats Counter Effect
      const statItems = gsap.utils.toArray<HTMLElement>(".stat-value");
      statItems.forEach((stat) => {
        const targetValueStr = stat.getAttribute("data-target") || "0";
        animateCounter(targetValueStr, (val) => { stat.innerText = val; }, {}, tl, "-=1.5");
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Large Image */}
          <div className="lg:col-span-5 relative group" id="large-img">
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
            <div className="bg-white rounded-[1.5rem] shadow-2xl shadow-black/5 overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full">
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center" ref={textRef}>
                <div
                  ref={iconRef}
                  className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center text-brand-primary mb-6"
                >
                  <Leaf size={28} />
                </div>
                <h3 className="text-animate-left text-3xl font-playfair font-bold text-brand-green mb-4">
                  {statsSection.card.title}
                </h3>
                <p className="text-animate-left text-gray-600 mb-8 leading-relaxed font-inter">
                  {statsSection.card.description}
                </p>
                <div className="text-animate-left">
                  <button className="border border-brand-green/20 text-brand-green font-bold px-8 py-3 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center gap-2 w-fit group">
                    {statsSection.card.ctaText}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div
                ref={imageRevealRef}
                className="relative w-full md:w-[280px] h-[300px] md:h-auto overflow-hidden [clip-path:inset(0_0_0_0)]"
              >
                <Image
                  src={statsSection.card.image}
                  alt="Outdoor Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom: Stats Bar */}
            <div className="bg-brand-green rounded-[2.5rem] p-8 md:p-12" ref={statsRef}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsSection.stats.map((stat: any, index: number) => (
                  <div key={index} className="text-center md:text-left">
                    <div
                      className="stat-value text-3xl md:text-4xl font-bold text-white mb-2"
                      data-target={stat.value}
                    >
                      0
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
