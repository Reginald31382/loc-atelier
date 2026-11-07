"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/#home" },
  { name: "Our Story", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Reviews", href: "/#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C6A66B]/25 bg-[#211D19]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-12 lg:py-5">
        {/* BRAND */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="group flex min-w-0 flex-col"
        >
          <span className="whitespace-nowrap font-serif text-xl tracking-[0.04em] text-[#F1EBDD] transition group-hover:text-[#D4B18A] sm:text-2xl md:text-3xl">
            THE LOC <span className="italic text-[#B89A70]">ATELIER</span>
          </span>

          <span className="mt-1 text-[7px] tracking-[0.3em] text-[#C6B9A7] sm:text-[8px] sm:tracking-[0.42em]">
            THE ART OF LOC CARE
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 text-[10px] tracking-[0.17em] text-[#E4D9C9] transition hover:text-[#D4B18A] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C6A66B] after:transition-all hover:after:w-full"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* DESKTOP BOOKING */}
        <Link
          href="/booking"
          className="hidden items-center gap-3 border border-[#B89A70]/80 px-5 py-3 text-[10px] tracking-[0.17em] text-[#E5C79B] transition hover:bg-[#B89A70] hover:text-[#211D19] lg:inline-flex xl:px-6"
        >
          BOOK AN APPOINTMENT
          <ArrowUpRight size={14} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-[#D4B18A] transition hover:text-[#F1EBDD] lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-[#C6A66B]/20 bg-[#211D19]/98 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 py-7 sm:px-9">
          <p className="mb-5 text-[9px] tracking-[0.35em] text-[#C6A66B]">
            EXPLORE THE ATELIER
          </p>

          <div className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="flex items-center justify-between border-b border-white/10 py-4 font-serif text-xl text-[#F1EBDD] transition hover:pl-2 hover:text-[#D4B18A]"
              >
                {link.name}

                <span className="text-[10px] tracking-widest text-[#C6A66B]">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/booking"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-7 flex items-center justify-center gap-3 bg-[#B89A70] px-6 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#211D19] transition hover:bg-[#F1EBDD]"
          >
            BOOK YOUR EXPERIENCE
            <ArrowUpRight size={15} />
          </Link>

          <p className="mt-6 text-center font-serif text-sm italic text-[#D4B18A]">
            Beauty in every detail.
          </p>
        </div>
      </div>
    </header>
  );
}
