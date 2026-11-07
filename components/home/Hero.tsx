import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=2000";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#211D19]/25 pt-28 backdrop-blur-[2px]"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:min-h-[760px] lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mb-7 flex items-center justify-center gap-4 text-[9px] tracking-[0.3em] text-[#D4B18A] sm:text-[10px] lg:justify-start lg:tracking-[0.35em]">
            <span className="h-px w-10 bg-[#C6A66B] sm:w-12" />
            THE ART OF LOC CARE
          </p>

          <h1 className="font-serif text-5xl leading-[1.02] text-[#F7F0E5] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            A Crown
            <span className="block">Like No</span>
            <span className="block italic text-[#C69A83]">Other.</span>
          </h1>

          <div className="mx-auto my-8 h-px w-20 bg-[#C6A66B] sm:w-24 lg:mx-0 lg:my-9" />

          <p className="mx-auto max-w-md text-sm leading-7 text-[#E4D9C9] sm:text-base sm:leading-8 lg:mx-0">
            Thoughtful loc care. Intentional artistry. An elevated experience
            designed to honor your natural crown and celebrate your individual
            beauty.
          </p>

          {/* CALLS TO ACTION */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center gap-4 bg-[#B89A70] px-7 py-5 text-[10px] font-semibold tracking-[0.18em] text-[#211D19] transition hover:bg-[#F1EBDD]"
            >
              BOOK YOUR EXPERIENCE
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/#services"
              className="group inline-flex items-center justify-center gap-3 border border-[#D4B18A]/50 px-7 py-5 text-[10px] tracking-[0.18em] text-[#F1EBDD] transition hover:border-[#C6A66B] hover:bg-[#B89A70]/15 hover:text-[#E5C79B]"
            >
              EXPLORE SERVICES
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 hidden items-center justify-center gap-4 sm:flex lg:mt-16 lg:justify-start">
            <span className="h-px w-12 bg-[#C6A66B]" />
            <span className="text-[9px] tracking-[0.25em] text-[#D0BFA9]">
              BEAUTY IN EVERY DETAIL
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[580px] pb-5 sm:pb-7 lg:pb-0">
          {/* Decorative frame */}
          <div className="absolute -right-2 -top-2 h-[calc(100%-28px)] w-full border border-[#C6A66B] sm:-right-4 sm:-top-4 md:-right-6 md:-top-6" />

          {/* Portrait */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#4A3028]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${heroImage}")` }}
              role="img"
              aria-label="Editorial beauty portrait"
            />

            <div className="absolute inset-0 bg-[#211D19]/10" />

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#211D19]/85 via-[#211D19]/35 to-transparent px-5 pb-7 pt-20 sm:px-8 sm:pb-9">
              <p className="font-serif text-2xl italic text-[#FFF7EB] sm:text-3xl">
                Your crown.
              </p>

              <p className="mt-2 text-[9px] tracking-[0.3em] text-[#F1EBDD]">
                YOUR SIGNATURE.
              </p>
            </div>
          </div>

          {/* Brand badge - separated from image caption */}
          <div className="relative z-10 mt-4 flex justify-end sm:mt-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C6A66B] bg-[#F1EBDD] text-center shadow-lg sm:h-24 sm:w-24">
              <div>
                <p className="font-serif text-xl italic text-[#A87963] sm:text-2xl">
                  Loc
                </p>
                <p className="mt-1 text-[7px] tracking-[0.2em] text-[#55483D]">
                  ATELIER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DETAIL STRIP */}
      <div className="border-t border-[#C6A66B]/35 bg-[#211D19]/20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:px-12 lg:px-20">
          <p className="text-[9px] tracking-[0.2em] text-[#D0BFA9]">
            AN EXPERIENCE ROOTED IN CARE & CRAFT
          </p>

          <Link
            href="/#about"
            className="flex items-center gap-3 text-[9px] tracking-[0.2em] text-[#D4B18A] transition hover:text-[#F1EBDD]"
          >
            DISCOVER OUR STORY
            <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
