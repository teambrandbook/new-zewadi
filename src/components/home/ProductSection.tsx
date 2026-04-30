"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { productCarouselAnimation } from "@/utils/animations";

const products = [
  { image: "/home/productImg1.webp", text: "Fresh organic products" },
  { image: "/home/productImg2.webp", text: "Healthy daily ingredients" },
  { image: "/home/productImg3.webp", text: "Smart farming solutions" },
];

const ProductSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);
  const wheelDeltaRef = useRef(0);
  const wheelResetTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
      return;
    }

    event.preventDefault();

    if (isAnimating || wheelLockRef.current) {
      return;
    }

    wheelDeltaRef.current += event.deltaX;

    if (wheelResetTimeoutRef.current) {
      window.clearTimeout(wheelResetTimeoutRef.current);
    }

    wheelResetTimeoutRef.current = window.setTimeout(() => {
      wheelDeltaRef.current = 0;
    }, 180);

    if (Math.abs(wheelDeltaRef.current) < 55) {
      return;
    }

    wheelLockRef.current = true;

    if (wheelDeltaRef.current > 0) {
      next();
    } else {
      prev();
    }

    wheelDeltaRef.current = 0;

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    productCarouselAnimation(
      containerRef.current,
      activeIndex,
      setIsAnimating
    );
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (wheelResetTimeoutRef.current) {
        window.clearTimeout(wheelResetTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      onWheel={handleWheel}
      className="w-full overflow-hidden bg-[#1f4b3f] py-12 lg:py-16"
    >
      <div className="w-full px-6 lg:px-24">
        <h2 className="mb-8 font-serif text-3xl text-[#fdf6ee] sm:text-4xl lg:text-5xl">
          Our Product
        </h2>

        <div className="relative flex h-[280px] items-center justify-center sm:h-[360px] lg:h-[440px]">
          {products.map((item, i) => (
            <div
              key={i}
              className={`card absolute h-[180px] w-[130px] overflow-hidden rounded-xl opacity-90 sm:h-[260px] sm:w-[190px] lg:h-[300px] lg:w-[330px]`}
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <Image
                src={item.image}
                alt="product"
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[600px] text-center text-sm text-[#fdf6ee]/80">
          {products[activeIndex].text}
        </p>
      </div>
    </section>
  );
};

export default ProductSection;
