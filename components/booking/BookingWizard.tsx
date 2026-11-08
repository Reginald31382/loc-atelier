"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Scissors,
  Sparkles,
} from "lucide-react";

const services = [
  { id: "starter", name: "Starter Locs", price: 125, duration: "2–3 hours" },
  { id: "retwist", name: "Loc Retwist", price: 85, duration: "1–2 hours" },
  { id: "interlocking", name: "Interlocking", price: 110, duration: "2 hours" },
  { id: "styling", name: "Loc Styling", price: 65, duration: "1 hour" },
  { id: "repair", name: "Loc Repair", price: 75, duration: "1–2 hours" },
  {
    id: "consultation",
    name: "Consultation",
    price: 25,
    duration: "30 minutes",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
];

const inputStyle =
  "w-full border border-[#B89A70]/40 bg-[#F1EBDD] px-4 py-3 text-sm text-[#211D19] placeholder:text-[#82796E]/70 outline-none transition focus:border-[#B89A70] focus:ring-1 focus:ring-[#B89A70]/30";

type ClientDetails = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [today, setToday] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState<ClientDetails>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const localDate = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("-");

    setToday(localDate);
  }, []);

  const selectedService = services.find((service) => service.id === serviceId);

  const updateDetails = (field: keyof ClientDetails, value: string) => {
    setDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const canContinue = () => {
    if (step === 1) return Boolean(serviceId);
    if (step === 2) return Boolean(date && time);

    if (step === 3) {
      return (
        details.name.trim().length > 0 &&
        details.email.trim().length > 0 &&
        details.phone.trim().length > 0
      );
    }

    return true;
  };

  const nextStep = () => {
    if (canContinue()) {
      setStep((previous) => Math.min(previous + 1, 4));
    }
  };

  const previousStep = () => {
    setStep((previous) => Math.max(previous - 1, 1));
  };

  const submitBooking = () => {
    setConfirmed(true);
  };

  const stepLabels = ["Service", "Schedule", "Details", "Review"];

  if (confirmed) {
    return (
      <section className="flex min-h-screen items-center justify-center px-5 py-20">
        <div className="w-full max-w-xl border border-[#B89A70]/40 bg-[#F1EBDD] p-8 text-center shadow-2xl shadow-black/20 md:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#B89A70]/40 bg-[#211D19]">
            <CheckCircle2 size={34} className="text-[#C6A66B]" />
          </div>

          <p className="mb-3 text-xs tracking-[0.35em] text-[#A87963]">
            THE LOC ATELIER
          </p>

          <h1 className="mb-4 font-serif text-4xl text-[#211D19] md:text-5xl">
            Request Received
          </h1>

          <p className="mb-8 text-sm leading-7 text-[#82796E]">
            Thank you, {details.name}. Your appointment request has been
            completed in this demo. No appointment has actually been submitted
            or reserved.
          </p>

          <div className="mb-8 border border-[#B89A70]/30 bg-white/40 p-6 text-left">
            <p className="mb-4 text-[10px] tracking-[0.25em] text-[#A87963]">
              APPOINTMENT SUMMARY
            </p>

            <p className="mb-2 font-serif text-xl text-[#211D19]">
              {selectedService?.name}
            </p>

            <p className="mb-2 text-sm text-[#82796E]">
              {date} at {time}
            </p>

            <p className="text-sm text-[#82796E]">
              Starting at ${selectedService?.price}
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#211D19] px-8 py-4 text-xs tracking-[0.2em] text-[#F1EBDD] transition hover:bg-[#A87963]"
          >
            RETURN HOME
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-5 pb-20 pt-24 md:px-8 md:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* INTRODUCTION */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] tracking-[0.4em] text-[#C6A66B]">
            THE LOC ATELIER
          </p>

          <h1 className="mb-4 font-serif text-5xl text-[#F1EBDD] md:text-6xl">
            Book Your Experience
          </h1>

          <p className="text-sm leading-7 text-[#C6B9A7]">
            Your journey to elevated loc care begins here.
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-[#B89A70]" />
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="mb-12 grid grid-cols-4 gap-3">
          {stepLabels.map((label, index) => {
            const number = index + 1;
            const active = step >= number;

            return (
              <div key={label}>
                <div
                  className={`mb-3 h-[3px] transition-colors ${
                    active ? "bg-[#C6A66B]" : "bg-[#82796E]/40"
                  }`}
                />
                <p
                  className={`text-center text-[9px] tracking-[0.12em] sm:text-[10px] md:text-xs ${
                    active ? "text-[#F1EBDD]" : "text-[#82796E]"
                  }`}
                >
                  {label.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOOKING PANEL */}
        <div className="border border-[#B89A70]/40 bg-[#F1EBDD] p-6 shadow-2xl shadow-black/20 md:p-10">
          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div>
              <div className="mb-8">
                <Scissors className="mb-4 text-[#A87963]" size={25} />

                <h2 className="font-serif text-3xl text-[#211D19]">
                  Select Your Service
                </h2>

                <p className="mt-2 text-sm text-[#82796E]">
                  Choose the experience that best fits your loc care needs.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service) => {
                  const selected = serviceId === service.id;

                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => setServiceId(service.id)}
                      aria-pressed={selected}
                      className={`border p-5 text-left transition duration-300 ${
                        selected
                          ? "border-[#A87963] bg-[#211D19] text-[#F1EBDD] shadow-lg"
                          : "border-[#B89A70]/40 bg-white/40 text-[#211D19] hover:border-[#A87963] hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="mb-2 font-serif text-xl">
                            {service.name}
                          </h3>

                          <p
                            className={`text-xs ${
                              selected ? "text-[#C6B9A7]" : "text-[#82796E]"
                            }`}
                          >
                            {service.duration}
                          </p>
                        </div>

                        <span
                          className={`text-sm font-medium ${
                            selected ? "text-[#C6A66B]" : "text-[#A87963]"
                          }`}
                        >
                          ${service.price}+
                        </span>
                      </div>

                      {selected && (
                        <p className="mt-4 text-[10px] tracking-[0.2em] text-[#C6A66B]">
                          SELECTED
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: DATE AND TIME */}
          {step === 2 && (
            <div>
              <div className="mb-8">
                <CalendarDays className="mb-4 text-[#A87963]" size={25} />

                <h2 className="font-serif text-3xl text-[#211D19]">
                  Choose Your Appointment
                </h2>

                <p className="mt-2 text-sm text-[#82796E]">
                  Select your preferred date and time.
                </p>
              </div>

              <label className="mb-3 block text-[10px] tracking-[0.2em] text-[#211D19]">
                PREFERRED DATE
              </label>

              <input
                type="date"
                value={date}
                min={today || undefined}
                onChange={(event) => {
                  setDate(event.target.value);
                  setTime("");
                }}
                className={`${inputStyle} mb-8`}
              />

              <div className="mb-4 flex items-center gap-2">
                <Clock size={18} className="text-[#A87963]" />

                <h3 className="text-[10px] tracking-[0.2em] text-[#211D19]">
                  AVAILABLE TIME OPTIONS
                </h3>
              </div>

              {!date ? (
                <p className="border border-[#B89A70]/30 bg-white/40 p-5 text-sm text-[#82796E]">
                  Please select a date to view the sample time options.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      aria-pressed={time === slot}
                      className={`border px-4 py-4 text-sm transition ${
                        time === slot
                          ? "border-[#211D19] bg-[#211D19] text-[#F1EBDD]"
                          : "border-[#B89A70]/40 bg-white/40 text-[#211D19] hover:border-[#A87963] hover:bg-white/70"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-5 text-xs leading-6 text-[#82796E]">
                These are sample time options for the website demo, not live
                appointment availability.
              </p>
            </div>
          )}

          {/* STEP 3: CLIENT DETAILS */}
          {step === 3 && (
            <div>
              <div className="mb-8">
                <Sparkles className="mb-4 text-[#A87963]" size={25} />

                <h2 className="font-serif text-3xl text-[#211D19]">
                  Your Information
                </h2>

                <p className="mt-2 text-sm text-[#82796E]">
                  Tell us a little about yourself.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] tracking-[0.2em] text-[#211D19]">
                    FULL NAME *
                  </label>

                  <input
                    type="text"
                    value={details.name}
                    onChange={(event) =>
                      updateDetails("name", event.target.value)
                    }
                    placeholder="Your full name"
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] tracking-[0.2em] text-[#211D19]">
                    EMAIL ADDRESS *
                  </label>

                  <input
                    type="email"
                    value={details.email}
                    onChange={(event) =>
                      updateDetails("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] tracking-[0.2em] text-[#211D19]">
                    PHONE NUMBER *
                  </label>

                  <input
                    type="tel"
                    value={details.phone}
                    onChange={(event) =>
                      updateDetails("phone", event.target.value)
                    }
                    placeholder="(000) 000-0000"
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] tracking-[0.2em] text-[#211D19]">
                    ADDITIONAL NOTES
                  </label>

                  <textarea
                    rows={4}
                    value={details.notes}
                    onChange={(event) =>
                      updateDetails("notes", event.target.value)
                    }
                    placeholder="Tell us about your locs or any special requests..."
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div>
              <div className="mb-8">
                <CheckCircle2 className="mb-4 text-[#A87963]" size={26} />

                <h2 className="font-serif text-3xl text-[#211D19]">
                  Review Your Request
                </h2>

                <p className="mt-2 text-sm text-[#82796E]">
                  Make sure everything looks correct before submitting.
                </p>
              </div>

              <div className="space-y-5 border border-[#B89A70]/30 bg-white/40 p-6">
                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#A87963]">
                    SERVICE
                  </p>

                  <p className="font-serif text-xl text-[#211D19]">
                    {selectedService?.name}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#A87963]">
                    DATE & TIME
                  </p>

                  <p className="text-sm text-[#211D19]">
                    {date} at {time}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#A87963]">
                    CLIENT
                  </p>

                  <p className="text-sm text-[#211D19]">{details.name}</p>
                  <p className="text-sm text-[#82796E]">{details.email}</p>
                  <p className="text-sm text-[#82796E]">{details.phone}</p>
                </div>

                {details.notes && (
                  <div>
                    <p className="mb-1 text-[10px] tracking-[0.2em] text-[#A87963]">
                      NOTES
                    </p>

                    <p className="text-sm text-[#211D19]">{details.notes}</p>
                  </div>
                )}

                <div className="border-t border-[#B89A70]/40 pt-5">
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#A87963]">
                    ESTIMATED STARTING PRICE
                  </p>

                  <p className="font-serif text-2xl text-[#211D19]">
                    ${selectedService?.price}+
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#82796E]">
                Demo only: submitting this request will not reserve an
                appointment or transmit your information.
              </p>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="mt-10 flex items-center justify-between border-t border-[#B89A70]/40 pt-7">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="flex items-center gap-2 text-xs tracking-[0.15em] text-[#82796E] transition hover:text-[#A87963]"
              >
                <ArrowLeft size={16} />
                BACK
              </button>
            ) : (
              <Link
                href="/"
                className="text-xs tracking-[0.15em] text-[#82796E] transition hover:text-[#A87963]"
              >
                CANCEL
              </Link>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canContinue()}
                className="flex items-center gap-3 bg-[#211D19] px-7 py-4 text-xs tracking-[0.2em] text-[#F1EBDD] transition hover:bg-[#A87963] disabled:cursor-not-allowed disabled:opacity-40"
              >
                CONTINUE
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submitBooking}
                className="bg-[#211D19] px-7 py-4 text-xs tracking-[0.2em] text-[#F1EBDD] transition hover:bg-[#A87963]"
              >
                SUBMIT REQUEST
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#C6B9A7]">
          By continuing, you acknowledge that this is a frontend demo booking
          experience.
        </p>
      </div>
    </section>
  );
}
