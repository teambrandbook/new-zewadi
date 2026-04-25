"use client";

import React from "react";
import ProductHero from "@/components/products/ProductHero";
import ProductDetails from "@/components/products/ProductDetails";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductHero />
      <ProductDetails />
    </div>
  );
}
