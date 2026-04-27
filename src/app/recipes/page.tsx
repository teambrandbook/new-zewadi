"use client";

import ContentSection from "@/components/common/ContentSection";
import RecipeList from "@/components/recipes/RecipeList";
import { recipes } from "@/lib/recipes";
import { fadeIn } from "@/utils/animations";
import { useEffect } from "react";

// export const metadata = {
//   title: "Zewadi Recipes | Delicious Zewadi Buckwheat Recipes",
//   description:
//     "Explore delicious Zewadi buckwheat recipes for breakfast, lunch, dessert, and dinner.",
// };

export default function RecipesPage() {

  useEffect(() => {
    fadeIn(".fade-in");
  }, []);

  return (
    <main className="bg-white text-[#0e2207]">
     <ContentSection title="Zewadi Recipes" subtitle="Delicious Zewadi Buckwheat Recipes"/> 
      <RecipeList recipes={recipes} />
    </main>
  );
}
