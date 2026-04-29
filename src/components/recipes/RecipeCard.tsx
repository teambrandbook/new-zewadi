import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Recipe } from "@/components/recipes/recipeTypes";

export default function RecipeCard({
  recipe,
  reverse = false,
}: {
  recipe: Recipe;
  reverse?: boolean;
}) {
  const benefits = recipe.benefits ?? [];

  return (
    <article
      className={`recipe-card min-h-screen origin-top px-4 sm:px-5 lg:pt-20 grid items-start gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[200px] lg:pl-30
      ${reverse ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""}`}
    >
      {/* Image */}
      <div className="relative mx-auto h-[360px] w-full max-w-[380px] overflow-hidden rounded-[12px] sm:h-[320px] lg:h-[420px]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[480px] ">

        {/* Heading */}
        <h2 className="text-black font-[600] text-[20px] leading-[28px] md:text-[28px] md:leading-[34px] [font-family:'Playfair_Display']">
          {recipe.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[#1F4D3A] font-[600] text-[12px] md:text-[14px] leading-[1.5] [font-family:'Inter']">
          {recipe.description}
        </p>

        {/* Benefits Title */}
        {benefits.length > 0 && (
          <>
            <h3 className="mt-3 text-black font-[800] text-[14px] md:text-[16px] leading-normal [font-family:'Inter']">
              Benefits
            </h3>

            {/* Benefits List */}
            <ul className="mt-1 list-disc space-y-1 pl-5 text-[#1F4D3A] font-[600] text-[12px] md:text-[14px] leading-[1.5] [font-family:'Inter']">
              {benefits.map((benefit: string) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </>
        )}

        {/* Button */}
        <Link
          href={`/recipes/${recipe.id}`}
          className="mt-3 relative inline-flex items-center rounded-full bg-[#1f4d3a] pl-4 pr-10 py-2 text-[8px] md:text-[9px] font-medium uppercase tracking-[0.08em] text-white"
        >
          <span>Learn More</span>

          {/* Arrow Circle */}
          <span className="absolute right-[-16px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1f4d3a] border-2 border-white">
            <ArrowRight className="h-3 w-3 text-white" />
          </span>
        </Link>

      </div>
    </article>
  );
}