import { Metadata } from "next";
import EventsExperiencePage from "@/components/events/EventsExperiencePage";

export const metadata: Metadata = {
  title: "Zewadi Events | Join our community",
  description:
    "Zewadi events are spaces where people come together, connect, and try something new.",
};

export default function EventsPage() {
  return <EventsExperiencePage />;
}
