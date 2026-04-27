"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, User, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import navData from "@/data/navigation.json";
import gsap from "@/lib/gsap";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuBgVisible, setIsMenuBgVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Delay background color appearance
      const timer = setTimeout(() => {
        setIsMenuBgVisible(true);
      }, 300);

      gsap.fromTo(
        ".mobile-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );
      return () => clearTimeout(timer);
    } else {
      setIsMenuBgVisible(false);
    }
  }, [isMobileMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuBgVisible(false);
    // Delay closing of the menu container to allow background to disappear
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 400);
  };

  const { navLinks } = navData;

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
          isMenuBgVisible
            ? "bg-[#1A4331]"
            : isScrolled
              ? "bg-[#1A4331]/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
          {/* Hanging Logo Container */}
          <div className="relative z-10 w-[90px] md:w-[130px]">
            <Link href="/" className="block">
              <div className={cn(
                "absolute -top-10 left-0 bg-[#1A4331] border-x border-b border-white/10 rounded-b-xl shadow-2xl transition-all duration-500 overflow-hidden w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center p-2 md:p-3",
                !isScrolled && !isMenuBgVisible && "bg-transparent border-transparent shadow-none -top-0"
              )}>
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-[15px] font-semibold transition-all duration-300 flex items-center gap-1",
                    pathname === link.href ? "text-brand-primary" : "text-white/90 hover:text-brand-primary"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:bg-white/20 transition-all">
              <Globe className="text-white mr-2" size={18} />
              <span className="text-white font-bold text-sm">En</span>
            </div>

            {/* Profile Icon */}
            <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-brand-primary hover:text-brand-dark transition-all shadow-inner">
              <User size={22} />
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white ml-2 z-[1001]"
              onClick={() => isMobileMenuOpen ? handleCloseMenu() : setIsMobileMenuOpen(true)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[1050] transition-opacity duration-500 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={handleCloseMenu}
      />

      {/* Mobile Menu Container */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-[85%] md:w-[60%] bg-[#1A4331] z-[1100] flex flex-col pt-32 px-10 transition-transform duration-700 lg:hidden shadow-2xl border-l border-white/10",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-8 right-8 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-[1200] cursor-pointer"
          onClick={handleCloseMenu}
        >
          <X size={32} />
        </button>

        {/* Dynamic Background logic helper */}
        <div className={cn(
          "absolute inset-0 bg-[#1A4331] transition-opacity duration-500 -z-10",
          isMenuBgVisible ? "opacity-100" : "opacity-0"
        )} />

        <div className="flex flex-col space-y-6 relative z-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "mobile-link text-2xl md:text-3xl font-playfair font-bold transition-colors flex items-center justify-between",
                pathname === link.href ? "text-brand-primary" : "text-white/80 hover:text-brand-primary"
              )}
              onClick={handleCloseMenu}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-dm tracking-[0.3em] text-brand-primary/60 mt-2">
                  0{idx + 1}
                </span>
                {link.name}
              </div>
              <ArrowRight size={20} className="text-brand-primary/40" />
            </Link>
          ))}
        </div>

        <div className="mt-auto mb-20 mobile-link opacity-0">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <Globe className="text-brand-primary mr-3" size={20} />
            <span className="text-white font-bold text-lg">En - English</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
