import { Sparkles } from "lucide-react";

const gallery = [
  {
    title: "The Loc Refresh",
    category: "Maintenance",
    before:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700",
    after: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700",
  },
  {
    title: "Loc Transformation",
    category: "Styling",
    before:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700",
    after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-[#211D19]/65 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-6 flex items-center gap-4 text-[9px] tracking-[0.25em] text-[#D4B18A] sm:text-[10px] sm:tracking-[0.3em]">
              <span className="h-px w-10 bg-[#C6A66B]" />
              THE ART SPEAKS FOR ITSELF
            </p>

            <h2 className="font-serif text-5xl tracking-[-0.03em] text-[#F1EBDD] sm:text-6xl md:text-7xl">
              The <span className="italic text-[#C69A83]">Gallery</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-[#E2D8CA]">
            Every transformation is a celebration of individuality, confidence,
            and the beauty of healthy locs.
          </p>
        </div>

        {/* GALLERY ITEMS */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-14">
          {gallery.map((item, index) => (
            <article key={item.title} className="group min-w-0">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* BEFORE */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#39312A]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${item.before}")`,
                      }}
                      role="img"
                      aria-label={`${item.title} before`}
                    />

                    <span className="absolute bottom-3 left-2 bg-[#211D19]/90 px-2 py-2 text-[8px] tracking-[0.15em] text-[#F1EBDD] sm:bottom-4 sm:left-4 sm:px-3 sm:text-[9px] sm:tracking-[0.2em]">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* AFTER */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#39312A]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${item.after}")`,
                      }}
                      role="img"
                      aria-label={`${item.title} after`}
                    />

                    <span className="absolute bottom-3 left-2 bg-[#A87963]/95 px-2 py-2 text-[8px] tracking-[0.15em] text-white sm:bottom-4 sm:left-4 sm:px-3 sm:text-[9px] sm:tracking-[0.2em]">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* GALLERY CAPTION */}
              <div className="mt-5 flex items-center justify-between gap-3 border-b border-[#C6A66B]/40 pb-6 sm:mt-6">
                <div className="min-w-0">
                  <p className="mb-2 text-[8px] tracking-[0.15em] text-[#D4B18A] sm:text-[9px] sm:tracking-[0.25em]">
                    COLLECTION 0{index + 1} / {item.category.toUpperCase()}
                  </p>

                  <h3 className="font-serif text-2xl text-[#F1EBDD] sm:text-3xl md:text-4xl">
                    {item.title}
                  </h3>
                </div>

                <Sparkles
                  size={21}
                  strokeWidth={1}
                  className="shrink-0 text-[#C6A66B]"
                />
              </div>
            </article>
          ))}
        </div>

        {/* PLACEHOLDER NOTICE */}
        <p className="mt-10 text-center text-xs leading-6 text-[#D0BFA9] sm:mt-12">
          Gallery images are temporary visual placeholders. Replace them with
          actual client transformations before launch.
        </p>
      </div>
    </section>
  );
}
