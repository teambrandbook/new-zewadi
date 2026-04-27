"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CommunitySection from "@/components/home/CommunitySection";
import LearnMoreSection from "@/components/home/LearnMoreSection";
import HistorySection from "@/components/home/HistorySection";
import MeaningSection from "@/components/home/MeaningSection";
import ProductSection from "@/components/home/ProductSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <CommunitySection />
      <LearnMoreSection />
      <HistorySection />
      <MeaningSection />
      <ProductSection />
      <ExperienceSection />
      <NewsletterSection />
    </div>
  );
}
