import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function ExperienceBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#211D19] px-5 py-24 text-center sm:px-8 sm:py-28 md:py-36">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600)",
          }}
          role="img"
          aria-label="Editorial beauty background"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#211D19]/75" />

      {/* SUBTLE GOLD ACCENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#211D19]/30 via-transparent to-[#211D19]/50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Heart
          className="mx-auto mb-7 text-[#D4B18A]"
          size={34}
          strokeWidth={1.2}
        />

        <p className="editorial-label mb-6 text-[#D4B18A]">
          MORE THAN A HAIRSTYLE
        </p>

        <h2 className="font-serif text-4xl leading-[1.12] text-[#F7F0E5] sm:text-5xl md:text-7xl">
          A Crown Is Never
          <span className="mt-2 block italic text-[#C69A83]">
            Just a Crown.
          </span>
        </h2>

        <div className="mx-auto my-8 h-px w-20 bg-[#C6A66B]" />

        <p className="mx-auto max-w-lg text-sm leading-8 text-[#E8DED1] sm:text-base">
          It represents identity, expression, confidence, and the beauty of
          embracing who you are.
        </p>

        <Link
          href="/booking"
          className="group mt-9 inline-flex w-full items-center justify-center gap-3 border border-[#C6A66B] px-7 py-5 text-[10px] font-medium tracking-[0.18em] text-[#F1EBDD] transition duration-300 hover:bg-[#B89A70] hover:text-[#211D19] sm:mt-11 sm:w-auto sm:px-9"
        >
          BEGIN YOUR JOURNEY
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
