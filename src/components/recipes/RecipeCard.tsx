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
      className={`origin-top px-5 sm:px-6 lg:pt-10 grid items-center gap-8 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-[90px] ${
        reverse
          ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
          : ""
      }`}
    >
      {/* Image */}
      <div className="relative mx-auto h-[360px] w-full max-w-[480px] overflow-hidden rounded-[14px] sm:h-[460px] lg:h-[600px]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[560px]">

        {/* Heading */}
        <h2 className="text-black font-[600] text-[28px] leading-[36px] md:text-[42px] md:leading-[48px] [font-family:'Playfair_Display']">
          {recipe.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#1F4D3A] font-[600] text-[14px] md:text-[18px] leading-[1.6] [font-family:'Inter']">
          {recipe.description}
        </p>

        {/* Benefits Title */}
        {benefits.length > 0 && (
          <>
            <h3 className="mt-4 text-black font-[800] text-[18px] md:text-[21px] leading-normal [font-family:'Inter']">
              Benefits
            </h3>

            {/* Benefits List */}
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1F4D3A] font-[600] text-[14px] md:text-[18px] leading-[1.6] [font-family:'Inter']">
              {benefits.map((benefit: string) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </>
        )}

        {/* Button */}
        <Link
          href={`/recipes/${recipe.id}`}
          className="mt-4 relative inline-flex items-center rounded-full bg-[#1f4d3a] pl-6 pr-14 py-4.25 text-[10.5px] font-medium uppercase tracking-[0.09em] text-white"
        >
          <span>Learn More</span>

          {/* Arrow Circle */}
          <span className="absolute right-[-23px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#1f4d3a] border-2 border-white">
            <ArrowRight className="h-4.5 w-4.5 text-white" />
          </span>
        </Link>

      </div>
    </article>
  );
}
