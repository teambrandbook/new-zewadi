"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContentSection from "../common/ContentSection";

type FaqItem = {
  question: string;
  answer?: string;
};

const leftFaqs: FaqItem[] = [
  {
    question: "What is Zewadi?",
    answer:
      "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
  },
  { question: "Do you use additives or preservatives?" },
  { question: "Do you offer delivery?" },
  { question: "How can I order?" },
  { question: "What is the Zewadi Community?" },
];

const rightFaqs: FaqItem[] = [
  { question: "Are your products healthy?" },
  { question: "what are the key benefits of Buckwheat?" },
  { question: "When I Get may order?" },
  { question: "How Zewadi Can bring Healthy Life Style?" },
  { question: "Is Buckwheat good For children's ?" },
  { question: "Is zewadi products Deliver All over the other countries?" },
];

function FaqCard({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[20px] text-left shadow-[0_0_60px_rgba(0,0,0,0.05)] transition-colors ${
        isOpen ? "bg-[#f1f5eb]" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="min-w-0">
          <h3 className="text-[16px] font-semibold leading-relaxed text-[#1f4d3a] sm:text-[17px]">
            {item.question}
          </h3>
          {isOpen && item.answer ? (
            <p className="mt-3 max-w-[480px] text-[14px] leading-[26px] text-[#727272]">
              {item.answer}
            </p>
          ) : null}
        </div>

        <span
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isOpen ? "bg-[#1f4d3a] text-white" : "bg-[#f1f5eb] text-[#1f4d3a]"
          }`}
        >
          <ChevronRight
            size={16}
            className={`transition-transform ${isOpen ? "-rotate-90" : ""}`}
          />
        </span>
      </div>
    </button>
  );
}

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(leftFaqs[0].question);

  return (
    <div className="bg-white">
      <ContentSection title="FAQ" subtitle="Frequently Asked Concerns" />

      <section className="py-14 sm:py-20 pt-10 sm:pt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-[1140px] gap-4 lg:grid-cols-2">
            <div className="space-y-5">
              {leftFaqs.map((item) => (
                <FaqCard
                  key={item.question}
                  item={item}
                  isOpen={openQuestion === item.question}
                  onClick={() =>
                    setOpenQuestion((current) =>
                      current === item.question ? "" : item.question
                    )
                  }
                />
              ))}
            </div>

            <div className="space-y-5">
              {rightFaqs.map((item) => (
                <FaqCard
                  key={item.question}
                  item={item}
                  isOpen={openQuestion === item.question}
                  onClick={() =>
                    setOpenQuestion((current) =>
                      current === item.question ? "" : item.question
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
