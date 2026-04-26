import React from "react";
import Link from "next/link";
import * as Brands from "./BrandIcons";
import navData from "@/data/navigation.json";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Github: Brands.Github,
  Twitter: Brands.Twitter,
  Linkedin: Brands.Linkedin,
  Instagram: Brands.Instagram,
};

const Footer = () => {
  const { footer, socials } = navData;

  return (
    <footer className="bg-brand-dark/5 py-20 mt-20 border-t border-brand-dark/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            ZEWADI<span className="text-brand-primary">.</span>
          </Link>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Building the next generation of digital experiences with a focus on
            performance, accessibility, and modern design.
          </p>
          <div className="flex space-x-4">
            {socials.map((social, i) => {
              const Icon = iconMap[social.platform];
              return (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Products</h4>
          <ul className="space-y-4">
            {footer.products.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-brand-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            {footer.company.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-brand-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4">
            {footer.support.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-brand-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-brand-dark/5 text-center text-foreground/40 text-sm">
        © {new Date().getFullYear()} Zewadi Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
