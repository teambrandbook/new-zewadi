"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Brands from "./BrandIcons";
import navData from "@/data/navigation.json";

const iconMap: Record<string, any> = {
  Facebook: Brands.Facebook,
  Instagram: Brands.Instagram,
  TikTok: Brands.TikTok,
  Linkedin: Brands.Linkedin,
};

const Footer = () => {
  const { footer, socials } = navData;

  return (
    <footer className="relative bg-[#1A4331] pt-24 pb-12 overflow-hidden text-white ">
      {/* World Map Overlay - High-Dramatization */}
      <div className="absolute inset-0 opacity-40 pointer-events-none select-none">
        <Image 
          src="/bg/world-map.png"
          alt="World Map Background"
          fill
          className="object-cover scale-150 opacity-100 brightness-150 contrast-125 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A4331] via-transparent to-[#1A4331]/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Logo & Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="relative w-50 h-52 -mb-20 -top-20 block overflow-hidden rounded-xl ">
               <Image 
                src="/logo/zewadi-logo.webp"
                alt="Zewadi Logo"
                fill
                className="object-contain object-left scale-150"
               />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed max-w-[340px] mb-8 font-medium">
              Empowering businesses with innovative solutions for sustainable growth and success.
            </p>
            <div className="flex items-center space-x-6">
              {socials.map((social, i) => {
                const Icon = iconMap[social.platform];
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="group"
                    aria-label={social.platform}
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                       {Icon && <Icon size={20} />}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-8 gap-12 lg:gap-16">
            {/* Quick Links Column - Span 2 on mobile to sit on top of the next row */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[17px] font-bold mb-8 text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-4">
                {footer.quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors text-[15px] font-medium block h-full w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inner Pages Column */}
            <div className="col-span-1">
              <h4 className="text-[17px] font-bold mb-8 text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Inner Pages</h4>
              <ul className="space-y-4">
                {footer.innerPages.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors text-[15px] font-medium block h-full w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="col-span-1">
              <h4 className="text-[17px] font-bold mb-8 text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Support</h4>
              <ul className="space-y-4">
                {footer.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors text-[15px] font-medium block h-full w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-white/40 text-[13px] font-medium">
            © {new Date().getFullYear()} Zewadi . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
