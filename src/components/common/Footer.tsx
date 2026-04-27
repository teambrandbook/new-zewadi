"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Brands from "./BrandIcons";
import navData from "@/data/navigation.json";

type SocialPlatform = "Facebook" | "Instagram" | "TikTok" | "Linkedin";

const iconMap: Record<SocialPlatform, React.ComponentType<{ size?: number; className?: string }>> = {
  Facebook: Brands.Facebook,
  Instagram: Brands.Instagram,
  TikTok: Brands.TikTok,
  Linkedin: Brands.Linkedin,
};

const Footer = () => {
  const { footer, socials } = navData;

  return (
    <footer className="relative overflow-hidden bg-[#1A4331] pb-12 pt-24 text-white">
      <div className="pointer-events-none absolute inset-0 select-none opacity-40">
        <Image
          src="/bg/world-map.png"
          alt="World Map Background"
          fill
          className="scale-150 object-cover brightness-150 contrast-125 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A4331] via-transparent to-[#1A4331]/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-4">
            <Link href="/" className="relative mb-6 block h-24 w-40 overflow-hidden rounded-xl">
              <Image
                src="/logo/zewadi-logo.webp"
                alt="Zewadi Logo"
                fill
                className="object-contain object-left scale-110"
              />
            </Link>

            <p className="mb-8 max-w-[340px] text-[15px] font-medium leading-relaxed text-white/80">
              Thoughtfully crafted food for everyday living, shared moments, and a more intentional way to nourish life.
            </p>

            <div className="flex items-center space-x-6">
              {socials.map((social, index) => {
                const Icon = iconMap[social.platform as SocialPlatform];
                if (!Icon) return null;

                const isExternal = social.href.startsWith("http");

                return (
                  <a
                    key={`${social.platform}-${index}`}
                    href={social.href}
                    className="group"
                    aria-label={social.platform}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <div className="flex h-5 w-5 items-center justify-center text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-8 inline-block border-b border-white/10 pb-2 text-[17px] font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footer.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block h-full w-full text-[15px] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-8 inline-block border-b border-white/10 pb-2 text-[17px] font-bold uppercase tracking-widest text-white">
              Inner Pages
            </h4>
            <ul className="space-y-4">
              {footer.innerPages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block h-full w-full text-[15px] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="mb-8 inline-block border-b border-white/10 pb-2 text-[17px] font-bold uppercase tracking-widest text-white">
              Support
            </h4>
            <ul className="space-y-4">
              {footer.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block h-full w-full text-[15px] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-10 md:flex-row">
          <p className="text-[13px] font-medium text-white/40">
            &copy; {new Date().getFullYear()} Zewadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
