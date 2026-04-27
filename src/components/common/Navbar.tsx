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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const { navLinks, footer } = navData;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
        isScrolled
          ? "bg-[#1A4331]/95 backdrop-blur-md shadow-lg py-0"
          : "bg-[#1A4331] py-0"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        <div className="relative z-10 w-[90px] md:w-[130px]">
          <Link href="/" className="block">
            <div className="absolute -top-10 left-0 bg-[#1A4331] border-x border-b border-white/10 rounded-b-xl shadow-2xl transition-all duration-500 overflow-hidden w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center p-2 md:p-3">
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

        <div className="hidden lg:flex items-center space-x-10 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group h-full flex items-center">
              {link.hasDropdown ? (
                <div
                  className={cn(
                    "text-[15px] font-semibold transition-all duration-300 flex items-center gap-1 cursor-pointer py-4",
                    isLinkActive(link.href)
                      ? "text-[#83cd20]"
                      : "text-white/90 hover:text-[#83cd20]"
                  )}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-[1001]">
                    {footer.innerPages.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-6 py-2.5 text-sm font-medium text-[#1A4331] hover:bg-[#83cd20]/10 hover:text-[#83cd20] transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-[15px] font-semibold transition-all duration-300 flex items-center gap-1 py-4",
                    isLinkActive(link.href)
                      ? "text-[#83cd20]"
                      : "text-white/90 hover:text-[#83cd20]"
                  )}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:bg-white/20 transition-all">
            <Globe className="text-white mr-2" size={18} />
            <span className="text-white font-bold text-sm">En</span>
          </div>

          <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#83cd20] hover:text-[#1A4331] transition-all shadow-inner">
            <User size={22} />
          </div>

          <button
            type="button"
            className="lg:hidden text-white ml-2 z-[1001]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 right-0 w-[85%] md:w-[60%] bg-[#1A4331] z-[1000] flex flex-col pt-32 px-10 transition-transform duration-700 lg:hidden shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 relative z-10">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col space-y-4">
              <Link
                href={link.href}
                className={cn(
                  "mobile-link text-2xl md:text-3xl font-bold transition-colors flex items-center justify-between",
                  isLinkActive(link.href)
                    ? "text-[#83cd20]"
                    : "text-white/80 hover:text-[#83cd20]"
                )}
                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.3em] text-[#83cd20]/60 mt-2">
                    0{idx + 1}
                  </span>
                  {link.name}
                </div>
                {!link.hasDropdown && <ArrowRight size={20} className="text-[#83cd20]/40" />}
              </Link>
              
              {link.hasDropdown && (
                <div className="pl-10 flex flex-col space-y-4 pt-2">
                  {footer.innerPages.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className="mobile-link text-lg text-white/60 hover:text-[#83cd20]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
