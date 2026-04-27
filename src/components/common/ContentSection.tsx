import React from "react";

import { cn } from "@/lib/utils";

type ContentSectionProps = {
  title: string;
  subtitle: string;
  sectionClassName?: string;
  containerClassName?: string;
  spacerClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const ContentSection = ({
  title,
  subtitle,
  sectionClassName,
  containerClassName,
  spacerClassName,
  cardClassName,
  titleClassName,
  subtitleClassName,
}: ContentSectionProps) => {
  return (
    <section className={cn("bg-[#1f4d3a] pt-20 sm:pt-24 pb-0", sectionClassName)}>
      <div className={cn("container mx-auto px-4 sm:px-6", containerClassName)}>
        <div className={cn("h-[140px] sm:h-[180px]", spacerClassName)} />

        <div
          className={cn(
            "relative -mb-px max-w-[440px] rounded-t-[24px] bg-white px-7 py-7 sm:px-10 sm:py-10",
            cardClassName
          )}
        >
          <h1
            className={cn(
              "font-serif text-[2.25rem] font-bold leading-none text-[#0e2207] sm:text-[2.75rem]",
              titleClassName
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "mt-4 text-base font-bold text-[#1f6306] sm:text-lg",
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
