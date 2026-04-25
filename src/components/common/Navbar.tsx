"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import navData from "@/data/navigation.json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { navLinks } = navData;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-green/95 backdrop-blur-md shadow-lg py-0"
          : "bg-brand-green py-0"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        {/* Hanging Logo Container */}
        <div className="relative z-10 w-[90px] md:w-[130px]">
          <Link href="/" className="block">
            <div className="absolute -top-10 left-0 bg-brand-green border-x border-b border-white/10 rounded-b-[40px] shadow-2xl transition-all duration-500 overflow-hidden w-[90px] h-[100px] md:w-[130px] md:h-[140px] flex items-center justify-center p-2 md:p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
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
                  link.name === "Home" ? "text-brand-primary" : "text-white/90 hover:text-brand-primary"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-brand-primary transition-all duration-300",
                link.name === "Home" ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="hidden md:flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:bg-white/20 transition-all">
            <Globe className="text-white mr-2" size={18} />
            <span className="text-white font-bold text-sm">En</span>
          </div>

          {/* Profile Icon */}
          <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-brand-primary hover:text-brand-dark transition-all shadow-inner">
            <User size={22} />
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-dark/98 backdrop-blur-2xl z-40 flex flex-col pt-32 px-10 transition-transform duration-700 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-bold text-white hover:text-brand-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={24} />}
            </Link>
          ))}
        </div>

        <div className="mt-auto mb-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white/10 rounded-full px-6 py-4">
              <Globe className="text-white mr-3" size={24} />
              <span className="text-white font-bold text-xl">English (En)</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
