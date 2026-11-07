import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jasmine R.",
    service: "Loc Retwist",
    review:
      "The experience was amazing from beginning to end. My locs look healthy, neat, and beautiful. I finally found my loctician!",
  },
  {
    name: "Monique T.",
    service: "Starter Locs",
    review:
      "I was nervous about starting my loc journey, but the consultation made me feel comfortable. The attention to detail was incredible.",
  },
  {
    name: "Danielle W.",
    service: "Loc Styling",
    review:
      "The atmosphere, the service, and the results were everything. You can tell there is genuine care and passion behind the work.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[#211D19]/70 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-6 flex items-center justify-center gap-3 text-[9px] tracking-[0.2em] text-[#D4B18A] sm:gap-4 sm:text-[10px] sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-[#C6A66B] sm:w-10" />
            WORDS FROM OUR CLIENTS
            <span className="h-px w-8 bg-[#C6A66B] sm:w-10" />
          </p>

          <h2 className="font-serif text-4xl tracking-[-0.03em] text-[#F1EBDD] sm:text-5xl md:text-7xl">
            The Experience
            <span className="italic text-[#C69A83]"> Speaks.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#E2D8CA]">
            Every appointment is an opportunity to create something beautiful.
            Here's what our clients have to say.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="group flex flex-col border border-[#C6A66B]/40 bg-[#F1EBDD]/95 p-6 shadow-lg shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <p className="mb-6 text-[9px] tracking-[0.25em] text-[#986F59]">
                CLIENT STORY 0{index + 1}
              </p>

              <div
                className="flex gap-1 text-[#A87963]"
                aria-label="Five out of five stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={1} />
                ))}
              </div>

              <p className="mt-6 flex-1 font-serif text-xl leading-relaxed text-[#332A23] sm:mt-7 sm:text-2xl">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-[#B89A70]/45 pt-6 sm:mt-9">
                <p className="text-xs font-semibold tracking-[0.15em] text-[#211D19]">
                  {item.name}
                </p>

                <p className="mt-2 text-[9px] tracking-[0.2em] text-[#986F59]">
                  {item.service.toUpperCase()}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-9 text-center text-xs leading-6 text-[#D0BFA9]">
          Sample testimonials for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
