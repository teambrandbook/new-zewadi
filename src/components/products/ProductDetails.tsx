"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import productsData from "@/data/products.json";

const ProductDetails = () => {
  const { details } = productsData;
  const [quantity, setQuantity] = useState(3);
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="py-20 animate-fade-in">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Images */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden bg-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl">
              <Image
                src={details.images[activeThumb]}
                alt={details.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {details.images.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setActiveThumb(index)}
                  className={cn(
                    "relative aspect-square rounded-[1.2rem] overflow-hidden border-2 transition-all duration-300",
                    activeThumb === index ? "border-[#1A4331]" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <Image src={thumb} alt={`Thumbnail ${index}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1A4331] mb-4">
                {details.title}
              </h1>
              <p className="text-xl font-bold text-gray-900">{details.price}</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-lg font-inter">
              {details.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Benefits</h3>
              <ul className="space-y-2">
                {details.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-inter">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A4331] shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <div className="px-6 py-2 font-semibold text-gray-900 border-x border-gray-200">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Action Buttons */}
              <button className="flex-1 bg-[#1A4331] text-white font-bold py-3.5 px-10 rounded-lg hover:bg-[#1A4331]/90 transition-all shadow-lg active:scale-[0.98]">
                Buy Now
              </button>

              <button className="p-3.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-[#1A4331]">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Description Section */}
        <div className="mt-24 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl font-inter">
              {details.fullDescription}
            </p>
          </div>

          <button className="bg-[#1A4331] text-white font-bold py-3.5 px-8 rounded-lg hover:bg-[#1A4331]/90 transition-all shadow-md active:scale-[0.98]">
            Try Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
