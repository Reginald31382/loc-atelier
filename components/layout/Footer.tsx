import Link from "next/link";
import { ArrowUpRight, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#171614] text-[#F1EBDD]">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-10 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <h2 className="font-serif text-3xl tracking-[0.12em]">
              THE LOC <span className="text-[#C6A66B]">ATELIER</span>
            </h2>
          </Link>

          <div className="my-6 h-px w-20 bg-[#C6A66B]" />

          <p className="max-w-md text-sm leading-8 text-[#aaa397]">
            A refined approach to loc care. Where artistry, intention, and
            elevated beauty come together to celebrate your natural crown.
          </p>

          <div className="mt-7 flex items-center gap-3 text-[#C6A66B]">
            <Sparkles size={16} />
            <span className="text-[10px] tracking-[0.3em]">
              ELEVATE YOUR CROWN
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-7 text-xs tracking-[0.25em] text-[#C6A66B]">
            EXPLORE
          </h3>

          <ul className="space-y-4 text-sm text-[#aaa397]">
            <li>
              <Link href="/" className="transition hover:text-[#C6A66B]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#story" className="transition hover:text-[#C6A66B]">
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="transition hover:text-[#C6A66B]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#gallery"
                className="transition hover:text-[#C6A66B]"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="transition hover:text-[#C6A66B]"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Booking */}
        <div>
          <h3 className="mb-7 text-xs tracking-[0.25em] text-[#C6A66B]">
            YOUR EXPERIENCE
          </h3>

          <p className="mb-6 text-sm leading-7 text-[#aaa397]">
            Ready to give your locs the care and attention they deserve? Begin
            your experience with us.
          </p>

          <Link
            href="/booking"
            className="inline-flex items-center gap-3 border border-[#C6A66B] px-5 py-4 text-[10px] tracking-[0.2em] text-[#C6A66B] transition hover:bg-[#C6A66B] hover:text-[#171614]"
          >
            BOOK AN APPOINTMENT
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:px-10 md:text-left">
          <p className="text-[10px] tracking-[0.15em] text-[#82796E]">
            © THE LOC ATELIER. ALL RIGHTS RESERVED.
          </p>

          <p className="font-serif text-lg italic text-[#C6A66B]">
            Beauty in every detail.
          </p>

          <Link
            href="/"
            aria-label="Back to top"
            className="flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#aaa397] transition hover:text-[#C6A66B]"
          >
            BACK TO TOP
            <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
