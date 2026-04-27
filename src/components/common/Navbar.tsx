"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, User, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import navData from "@/data/navigation.json";
import gsap from "@/lib/gsap";

type NavItem = {
  name: string;
  href: string;
};

type NavLink = NavItem & {
  hasDropdown?: boolean;
  items?: NavItem[];
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        ".mobile-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.3 }
      );
    }
  }, [isMobileMenuOpen]);

  const { navLinks } = navData as { navLinks: NavLink[] };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
        isScrolled
          ? "bg-brand-green/95 backdrop-blur-md shadow-lg py-0"
          : "bg-brand-green py-0"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        <div className="relative z-10 w-[90px] md:w-[130px]">
          <Link href="/" className="block">
            <div className="absolute -top-10 left-0 bg-brand-green border-x border-b border-white/10 rounded-b-xl shadow-2xl transition-all duration-500 overflow-hidden w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center p-2 md:p-3">
              <div className="relative w-full h-full">
                <Image
                  src="/logo/zewadi-logo.webp"
                  alt="Zewadi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                onClick={(event) => {
                  if (link.items?.length) {
                    event.preventDefault();
                  }
                }}
                className={cn(
                  "text-[15px] font-semibold transition-all duration-300 flex items-center gap-1",
                  isLinkActive(link.href) ||
                    link.items?.some((item) => isLinkActive(item.href))
                    ? "text-brand-primary"
                    : "text-white/90 hover:text-brand-primary"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </Link>

              {link.items?.length ? (
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  <div className="min-w-[190px] rounded-2xl border border-white/10 bg-[#1A4331] p-2 shadow-2xl">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200",
                          isLinkActive(item.href)
                            ? "bg-white/10 text-brand-primary"
                            : "text-white/85 hover:bg-white/5 hover:text-brand-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:bg-white/20 transition-all">
            <Globe className="text-white mr-2" size={18} />
            <span className="text-white font-bold text-sm">En</span>
          </div>

          <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-brand-primary hover:text-brand-dark transition-all shadow-inner">
            <User size={22} />
          </div>

          <button
            className="lg:hidden text-white ml-2 z-[1001]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] transition-opacity duration-500 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 w-[85%] md:w-[60%] bg-[#1A4331] z-[1000] flex flex-col pt-32 px-10 transition-transform duration-700 lg:hidden shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Background Accent */}
        <div className={cn(
          "absolute inset-y-0 right-0 w-1/2 bg-brand-primary/5 transition-transform duration-1000 delay-300",
          isMobileMenuOpen ? "scale-x-100" : "scale-x-0"
        )} />

        <div className="flex flex-col space-y-6 relative z-10">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="mobile-link">
              <Link
                href={link.href}
                onClick={(event) => {
                  if (link.items?.length) {
                    event.preventDefault();
                    return;
                  }

                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-2xl md:text-3xl font-playfair font-bold transition-colors flex items-center justify-between",
                  isLinkActive(link.href) ||
                    link.items?.some((item) => isLinkActive(item.href))
                    ? "text-brand-primary"
                    : "text-white/80 hover:text-brand-primary"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-dm tracking-[0.3em] text-brand-primary/60 mt-2">
                    0{idx + 1}
                  </span>
                  {link.name}
                </div>
                <ArrowRight size={20} className="text-brand-primary/40" />
              </Link>

              {link.items?.length ? (
                <div className="mt-4 ml-10 flex flex-col gap-3 border-l border-white/10 pl-6">
                  {link.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-base font-dm transition-colors duration-200",
                        isLinkActive(item.href)
                          ? "text-brand-primary"
                          : "text-white/70 hover:text-brand-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-auto mb-20 mobile-link opacity-0">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <Globe className="text-brand-primary mr-3" size={20} />
            <span className="text-white font-bold text-lg">En - English</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
