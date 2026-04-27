"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import CommunitySection from "@/components/home/CommunitySection";
import LearnMoreSection from "@/components/home/LearnMoreSection";
import HistorySection from "@/components/home/HistorySection";
import MeaningSection from "@/components/home/MeaningSection";
import ProductSection from "@/components/home/ProductSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { fadeIn } from "@/utils/animations";

export default function Home() {
  useEffect(() => {
  fadeIn(".fade-in");
}, []);

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
