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
      <ContentSection 
        title="Zewadi Recipes" 
        subtitle="Delicious Zewadi Buckwheat Recipes" 
      />

      <section className="px-4 pb-12 pt-8 sm:px-6 md:pb-24 md:pt-16 lg:px-0">
        <div className="mx-auto max-w-[1130px]">
          {/* Main Grid: Stacks on mobile, side-by-side on LG (1024px+) */}
          <div className="grid gap-8 lg:grid-cols-[450px_1fr] lg:items-start lg:gap-[100px]">
            
            {/* Left Side: Recipe Image */}
            <div className="relative mx-auto w-full max-w-[450px] overflow-hidden rounded-[12px]">
              <div className="relative aspect-[4/5] sm:aspect-[450/540]">
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
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1f4d3a] shadow-lg transition-transform hover:scale-105 md:h-[62px] md:w-[62px]">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white md:ml-1 md:h-6 md:w-6" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className=" pt-1">
              <h2 className="font-['Playfair_Display'] text-[28px] font-bold uppercase leading-tight text-black sm:text-[36px] md:text-[46px]">
                {recipe.title}
              </h2>

              <p className="mt-4 font-['DM_Sans'] text-[15px] font-medium leading-relaxed text-[#1f4d3a] md:text-[16px]">
                {recipe.description}
              </p>

              {/* Responsive Grid for Boxes: Stacks on mobile, 2-cols on MD */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-[170px_1fr]">
                
                {/* Nutrition Box */}
                {nutrition ? (
                  <div className="rounded-[10px] bg-[#1f4d3a] px-4 py-5 h-fit">
                    <h3 className="mb-4 font-['Playfair_Display'] text-[14px] font-semibold text-white">
                      Nutrition Facts
                    </h3>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                      {[
                        { label: "Calories", val: nutrition.calories },
                        { label: "Fat", val: nutrition.fat },
                        { label: "Carbs", val: nutrition.carbs },
                        { label: "Protein", val: nutrition.protein },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[6px] bg-white px-2 py-3 text-center font-['DM_Sans'] text-[12px] font-bold leading-none text-black"
                        >
                          {item.val} {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Ingredients Box */}
                {(ingredients.length > 0) ? (
                  <div className="w-full rounded-[4px] border-2 border-dashed border-[#6d8f81] bg-white px-5 py-5 md:min-h-[240px] ">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="text-[#1f4d3a]">
                        <Utensils size={14} />
                      </div>
                      <h3 className="font-['DM_Sans'] text-[13px] font-semibold text-black  tracking-wider">
                        Ingredients
                      </h3>
                    </div>

                    <ul className="list-disc space-y-2 pl-4 font-['DM_Sans'] text-[14px] font-medium leading-snug text-[#1f4d3a] md:text-[13px]">
                      {ingredients.map((item, idx) => (
                        <li key={idx} className="pl-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* How to Cook Section */}
          {steps.length > 0 ? (
            <div className="mt-12 rounded-[6px] bg-[#f4f6ed] px-5 py-8 sm:px-8 sm:py-10 md:mt-16 lg:mt-20 lg:px-[76px] lg:py-12">
              <h3 className="mb-6 font-['Playfair_Display'] text-[26px] font-bold text-[#1f4d3a] md:mb-8 md:text-[36px]">
                How to Cook :
              </h3>

              <div className="space-y-6 md:space-y-7">
                {steps.map((step, index) => (
                  <div
                    key={`${id}-step-${index + 1}`}
                    className="max-w-[900px] font-['DM_Sans'] text-[15px] leading-relaxed text-[#496456]"
                  >
                    <span className="font-extrabold text-[#1f4d3a]">Step {index + 1} : </span>
                    <span className="font-normal">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}