export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-[#211D19]/70 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
        {/* IMAGE */}
        <div className="relative mx-auto w-full max-w-[520px] pb-8 pl-3 sm:pl-5">
          <div className="absolute left-0 top-0 h-[calc(100%-32px)] w-full border border-[#B89A70] sm:-left-2 sm:-top-2" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#4A3028]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000)",
              }}
              role="img"
              aria-label="Editorial beauty portrait representing The Loc Atelier"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#211D19]/45 via-[#211D19]/5 to-transparent" />
          </div>

          {/* IMAGE CAPTION */}
          <div className="absolute bottom-0 right-0 border border-[#B89A70] bg-[#211D19]/95 px-6 py-5 text-center shadow-xl sm:-right-3 sm:px-8 sm:py-6">
            <p className="font-serif text-3xl italic text-[#C69A83] sm:text-4xl">
              The Art
            </p>

            <p className="mt-1 text-[8px] tracking-[0.3em] text-[#F1EBDD] sm:text-[9px]">
              OF LOC CARE
            </p>
          </div>

          <p className="mt-5 text-[8px] tracking-[0.2em] text-[#D4B18A] sm:text-[9px] sm:tracking-[0.25em]">
            A PHILOSOPHY OF BEAUTY & INTENTION
          </p>
        </div>

        {/* CONTENT */}
        <div className="py-3 lg:py-12">
          <p className="mb-6 flex items-center gap-4 text-[9px] tracking-[0.25em] text-[#D4B18A] sm:mb-7 sm:text-[10px] sm:tracking-[0.3em]">
            <span className="h-px w-10 bg-[#B89A70]" />
            WELCOME TO THE LOC ATELIER
          </p>

          <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.03em] text-[#F7F0E5] sm:text-5xl md:text-6xl lg:text-7xl">
            Where Beauty
            <br />
            Meets <span className="italic text-[#C69A83]">Artistry.</span>
          </h2>

          <div className="my-8 h-px w-20 bg-[#B89A70]" />

          <p className="text-sm leading-8 text-[#E8DED1] md:text-base">
            At The Loc Atelier, we believe your loc journey is personal. Every
            crown tells a story, and every client deserves care that honors
            their individuality.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#E8DED1] md:mt-6 md:text-base">
            Our approach combines professional techniques, creativity, and
            attention to detail to create an experience that celebrates the
            beauty of natural hair.
          </p>

          <div className="mt-8 flex items-start gap-4 sm:mt-10 sm:items-center sm:gap-5">
            <span className="mt-4 h-px w-10 shrink-0 bg-[#B89A70] sm:w-14" />

            <span className="font-serif text-2xl italic leading-snug text-[#D4B18A] sm:text-3xl">
              Your crown deserves intention.
            </span>
          </div>

          {/* ATELIER VALUES */}
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#B89A70]/40 pt-7 sm:mt-12 sm:gap-6">
            <div>
              <p className="font-serif text-3xl text-[#F7F0E5]">01</p>

              <p className="mt-2 text-[8px] tracking-[0.15em] text-[#D4B18A] sm:text-[9px] sm:tracking-[0.2em]">
                PERSONALIZED CARE
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-[#F7F0E5]">02</p>

              <p className="mt-2 text-[8px] tracking-[0.15em] text-[#D4B18A] sm:text-[9px] sm:tracking-[0.2em]">
                INTENTIONAL ARTISTRY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
