"use client";

import React from "react";
import contactData from "@/data/contact.json";

const ContactHero = () => {
  const { hero } = contactData;

  return (
    <section className="bg-[#1A4331] pt-32 pb-8 md:pt-48 md:pb-16 flex flex-col items-start relative z-10 transition-all border-none">
      <div className="container mx-auto px-6 lg:px-20 relative">
        <div className="hero-box bg-white p-12 md:p-14 md:px-16 rounded-xl shadow-none text-left max-w-xl relative -mb-16 md:-mb-24 z-30 opacity-100 border-none">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A4331] mb-4 leading-tight">
            {hero.title}
          </h1>
          <p className="text-[#1A4331]/60 text-[11px] md:text-xs font-bold tracking-widest uppercase">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
