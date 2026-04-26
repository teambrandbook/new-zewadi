import Image from "next/image";

export default function MomentsSection() {
  return (
    <section className="bg-white px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:px-0">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[14px]">
          <div className="relative h-[220px] sm:h-[360px] lg:h-[500px]">
            <Image
              src="/event/moments_main.png"
              alt="People enjoying a Zewadi gathering"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto -mt-8 max-w-[900px] rounded-[10px] bg-white px-6 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.10)] sm:px-10 md:-mt-16 md:py-10">
          <h2 className="text-center font-sans text-[24px] font-semibold text-[#1f4d3a] md:text-[27px]">
            The moments that connect us
          </h2>
          <p className="mt-5 max-w-[680px] font-sans text-[16px] leading-7 text-black md:text-[23px] md:leading-[1.45]">
            At Zewadi, every event is more than just an occasion it&apos;s an
            experience. A space where community, wellness, and meaningful moments
            come together.
          </p>
          <p className="mt-6 max-w-[712px] font-sans text-[16px] font-semibold leading-7 text-[#1f4d3a] md:text-[23px] md:leading-[1.45]">
            Zewadi events aren&apos;t just gatherings. They&apos;re spaces where people
            come together, connect, and try something new.
          </p>
        </div>
      </div>
    </section>
  );
}
