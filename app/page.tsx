import { Sparkles } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import BookingWizard from "@/components/booking/BookingWizard";
import Footer from "@/components/layout/Footer";
import ExperienceBanner from "@/components/home/ExperienceBanner";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* BRAND STATEMENT */}
      <section className="bg-[#B89A70] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center text-[10px] font-semibold tracking-[3px] text-[#171614] md:text-xs">
          <span>HEALTHY LOCS</span>
          <Sparkles size={15} />
          <span>INTENTIONAL CARE</span>
          <Sparkles size={15} />
          <span>TIMELESS STYLE</span>
          <Sparkles size={15} />
          <span>YOUR CROWN, OUR CRAFT</span>
        </div>
      </section>

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* GALLERY */}
      <Gallery />

      {/* EXPERIENCE BANNER */}
      <ExperienceBanner />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BOOKING */}
      <BookingWizard />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
