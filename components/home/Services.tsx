import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    name: "Starter Locs",
    price: "From $125",
    description:
      "Begin your loc journey with a personalized foundation designed for your hair and lifestyle.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
  },
  {
    name: "Loc Retwist",
    price: "From $85",
    description:
      "Keep your roots neat and your locs looking fresh with professional maintenance.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
  },
  {
    name: "Loc Styling",
    price: "From $65",
    description:
      "Express your personality with beautiful, customized loc styles for every occasion.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
  },
  {
    name: "Interlocking",
    price: "From $110",
    description:
      "A detailed maintenance technique that keeps your roots looking clean and defined.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-[#211D19]/85 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mb-14 flex flex-col items-center text-center sm:mb-20">
          <p className="mb-6 flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#D4B18A] sm:mb-7 sm:gap-4 sm:text-[10px] sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-[#C6A66B] sm:w-10" />
            THE LOC ATELIER EXPERIENCE
            <span className="h-px w-8 bg-[#C6A66B] sm:w-10" />
          </p>

          <h2 className="font-serif text-5xl tracking-[-0.03em] text-[#F1EBDD] sm:text-6xl md:text-7xl">
            Our <span className="italic text-[#D4B18A]">Services</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#E0D5C6] sm:mt-7 md:text-base">
            Thoughtful care, expert techniques, and personalized styling to help
            your locs look and feel their best.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {services.map((service, index) => (
            <article key={service.name} className="group min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#39312A]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                  role="img"
                  aria-label={`${service.name} service`}
                />

                <div className="absolute inset-0 bg-[#211D19]/15 transition duration-500 group-hover:bg-[#211D19]/35" />

                <span className="absolute bottom-5 left-5 font-serif text-5xl italic text-[#F1EBDD]">
                  0{index + 1}
                </span>

                <span className="absolute right-3 top-3 border border-[#F1EBDD]/70 bg-[#211D19]/30 px-2 py-2 text-[8px] tracking-[0.15em] text-[#FFF8ED] sm:right-5 sm:top-5 sm:px-3 sm:text-[9px]">
                  THE ATELIER
                </span>
              </div>

              <div className="border-b border-[#C6A66B]/45 py-6 sm:py-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-serif text-2xl text-[#F1EBDD]">
                    {service.name}
                  </h3>

                  <span className="pt-2 text-xs text-[#D4B18A]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-4 min-h-0 text-xs leading-7 text-[#E0D5C6] sm:mt-5 sm:min-h-[75px]">
                  {service.description}
                </p>

                <Link
                  href="/booking"
                  className="group/link mt-5 inline-flex items-center gap-3 text-[9px] tracking-[0.18em] text-[#D4B18A] transition hover:text-[#F1EBDD] sm:mt-6 sm:tracking-[0.22em]"
                >
                  BOOK THIS SERVICE
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-[#D0BFA9] sm:mt-12">
          Prices shown are sample starting prices. Final pricing may vary by
          hair length, density, and service requirements.
        </p>
      </div>
    </section>
  );
}
