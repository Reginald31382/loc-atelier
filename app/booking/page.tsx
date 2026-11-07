import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BookingWizard from "@/components/booking/BookingWizard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Book an Appointment | The Loc Atelier",
  description: "Schedule your luxury loc care experience with The Loc Atelier.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#777066] transition hover:text-[#C6A66B]"
        >
          <ArrowLeft size={16} />
          BACK TO HOME
        </Link>
      </div>

      <BookingWizard />

      <Footer />
    </main>
  );
}
