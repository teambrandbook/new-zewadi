import Image from "next/image";
import { notFound } from "next/navigation";
import { Play, Utensils } from "lucide-react"; 
import { getRecipeById } from "@/lib/recipes";
import ContentSection from "@/components/common/ContentSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    return {
      title: "Recipe Not Found | Zewadi Recipes",
    };
  }

  return {
    title: `${recipe.title} | Zewadi Recipes`,
    description: recipe.description,
  };
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  const ingredients = recipe.ingredients ?? [];
  const optionalIngredients = recipe.optional ?? [];
  const steps = recipe.steps ?? [];
  const nutrition = recipe.nutrition;

  return (
    <main className="bg-white text-[#0e2207]">
      {/* Header Section with updated fonts and colors */}
      <ContentSection 
        title="Zewadi Recipes" 
        subtitle="Delicious Zewadi Buckwheat Recipes" 
      />

      <section className="px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-0">
        <div className="mx-auto max-w-[1130px]">
          <div className="grid gap-10 lg:grid-cols-[450px_minmax(0,1fr)] lg:items-start lg:gap-[56px]">
            
            {/* Left Side: Recipe Image */}
            <div className="relative mx-auto w-full max-w-[450px] overflow-hidden rounded-[12px]">
              <div className="relative aspect-[450/540]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#1f4d3a] shadow-[0_12px_24px_rgba(31,77,58,0.24)] transition-transform hover:scale-105">
                  <Play className="ml-1 h-6 w-6 fill-white text-white" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="max-w-[600px] pt-1">
              {/* Title: Playfair Display, Bold, Black */}
              <h2 className="font-['Playfair_Display'] text-[36px] font-bold uppercase leading-[1.05] text-black md:text-[46px]">
                {recipe.title}
              </h2>

              {/* Description: DM Sans, Green tint */}
              <p className="mt-4 max-w-[540px] font-['DM_Sans'] text-[15px] font-medium leading-[1.4] text-[#1f4d3a] md:text-[16px]">
                {recipe.description}
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-[170px_minmax(0,1fr)] md:items-start">
                
                {/* Nutrition Box */}
                {nutrition ? (
                  <div className="rounded-[10px] bg-[#1f4d3a] px-4 py-5">
                    <h3 className="mb-4 font-['Playfair_Display'] text-[14px] font-semibold text-white">
                      Nutrition Facts
                    </h3>

                    <div className="space-y-3">
                      {[
                        `${nutrition.calories} Calories`,
                        `${nutrition.fat} Fat`,
                        `${nutrition.carbs} Carbs`,
                        `${nutrition.protein} Protein`,
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[6px] bg-white px-2 py-3 text-center font-['DM_Sans'] text-[12px] font-bold leading-none text-black"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Ingredients Box */}
                {(ingredients.length > 0 || optionalIngredients.length > 0) ? (
                  <div className="rounded-[4px] border border-dashed border-[#6d8f81] bg-white px-5 py-5 md:min-h-[228px]">
                    {ingredients.length > 0 ? (
                      <>
                        <div className="mb-3 flex items-center gap-2">
                          <div className="text-[#1f4d3a]">
                            <Utensils size={14} />
                          </div>
                          <h3 className="font-['DM_Sans'] text-[13px] font-semibold text-black">
                            Ingredient
                          </h3>
                        </div>

                        <ul className="list-disc space-y-1.5 pl-4 font-['DM_Sans'] text-[12px] font-medium leading-[1.3] text-[#1f4d3a] md:text-[13px]">
                          {ingredients.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}

                    {optionalIngredients.length > 0 ? (
                      <p className="mt-4 font-['DM_Sans'] text-[12px] font-medium leading-[1.4] text-[#1f4d3a] md:text-[13px]">
                        <span className="font-bold text-black">Optional:</span>{" "}
                        {optionalIngredients.join(", ")}.
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* How to Cook Section */}
          {steps.length > 0 ? (
            <div className="mt-14 rounded-[6px] bg-[#f4f6ed] px-6 py-10 md:mt-16 md:px-10 md:py-12 lg:mt-20 lg:px-[76px]">
              <h3 className="mb-8 font-['Playfair_Display'] text-[30px] font-bold text-[#1f4d3a] md:text-[36px]">
                How to Cook :
              </h3>

              <div className="space-y-7">
                {steps.map((step, index) => (
                  <p
                    key={`${recipe.id}-step-${index + 1}`}
                    className="max-w-[900px] font-['DM_Sans'] text-[14px] leading-[1.55] text-[#496456] md:text-[15px]"
                  >
                    <span className="font-extrabold text-[#1f4d3a]">{`Step ${index + 1} : `}</span>
                    <span className="font-normal">{step}</span>
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
