import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (selector: string) => {
  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 }, // start
      {
        opacity: 1,   // end
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  });
};