"use client";
import React from "react";
import CommunitySection from "@/components/events/CommunitySection";
import EventHeader from "@/components/events/EventHeader";
import EventTestimonials from "@/components/events/EventTestimonials";
import MomentsSection from "@/components/events/MomentsSection";
import PastEvents from "@/components/events/PastEvents";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import ContentSection from "../common/ContentSection";

export default function EventsExperiencePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white pb-24 text-[#0e2207]">
      <ContentSection title="Zewadi Events" subtitle="Zewadi Community Events " />
      <MomentsSection />
      <CommunitySection />
      <UpcomingEvents />
      <PastEvents />
      <EventTestimonials />
    </div>
  );
}
