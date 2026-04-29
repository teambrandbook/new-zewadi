import BlogDetailTemplate from "./detail-template";

const image = "/blogs/blog-1.webp";

const popularPosts = [
  {
    title: "Find Your Adventure Live Your Passion",
    image:
      "/blogs/blog-1.webp",
  },
  {
    title: "Ravel Beyond Your Products",
    image:
      "/blogs/blog-2.webp",
  },
  {
    title: "Healthy Eating on a Budget",
    image:
      "/blogs/blog-3.webp",
  },
];

export default function Detail01() {
  return (
    <BlogDetailTemplate
      heroTitle="Blogs"
      heroSubtitle="Zewadi Blogs"
      image={image}
      title="WellLife for Everyday Living"
      intro="A journey into simple, mindful living where everyday choices feel lighter, cleaner, and more balanced. With Zewadi, healthy living isn't complicated; it's about embracing small habits, choosing better ingredients, and creating a lifestyle that feels natural, effortless, and truly your own."
      popularPosts={popularPosts}
    />
  );
}
