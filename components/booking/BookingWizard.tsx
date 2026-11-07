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
  "w-full border border-[#d8d0c3] bg-white px-4 py-3 text-sm text-[#211D19] outline-none transition focus:border-[#c6a66b]";

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

  if (confirmed) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl border border-[#d8d0c3] bg-white p-8 text-center shadow-sm md:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1EBDD]/70 backdrop-blur-sm">
            <CheckCircle2 size={34} className="text-[#c6a66b]" />
          </div>

          <p className="mb-3 text-xs tracking-[0.35em] text-[#c6a66b]">
            THE LOC ATELIER
          </p>

          <h1 className="mb-4 font-serif text-4xl text-[#211D19] md:text-5xl">
            Request Received
          </h1>

          <p className="mb-8 text-sm leading-7 text-[#777066]">
            Thank you, {details.name}. Your appointment request has been
            completed in this demo. No appointment has actually been submitted
            or reserved.
          </p>

          <div className="mb-8 bg-[#F1EBDD]/70 backdrop-blur-sm p-6 text-left">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#82796E]">
              APPOINTMENT SUMMARY
            </p>

            <p className="mb-2 font-serif text-xl">{selectedService?.name}</p>

            <p className="mb-2 text-sm text-[#777066]">
              {date} at {time}
            </p>

            <p className="text-sm text-[#777066]">
              Starting at ${selectedService?.price}
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#211D19] px-8 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#c6a66b]"
          >
            RETURN HOME
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-5 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] text-[#c6a66b]">
            THE LOC ATELIER
          </p>

          <h1 className="mb-4 font-serif text-5xl text-[#211D19] md:text-6xl">
            Book Your Experience
          </h1>

          <p className="text-sm text-[#777066]">
            Your journey to elevated loc care begins here.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12 grid grid-cols-4 gap-2">
          {["Service", "Schedule", "Details", "Review"].map((label, index) => {
            const number = index + 1;
            const active = step >= number;

            return (
              <div key={label}>
                <div
                  className={`mb-3 h-1 ${
                    active ? "bg-[#c6a66b]" : "bg-[#ded8ce]"
                  }`}
                />
                <p
                  className={`text-center text-[10px] tracking-[0.12em] md:text-xs ${
                    active ? "text-[#211D19]" : "text-[#aaa397]"
                  }`}
                >
                  {label.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>

        <div className="border border-[#ded8ce] bg-white p-6 shadow-sm md:p-10">
          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div>
              <div className="mb-8">
                <Scissors className="mb-4 text-[#c6a66b]" size={25} />
                <h2 className="font-serif text-3xl">Select Your Service</h2>
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
                      className={`border p-5 text-left transition ${
                        selected
                          ? "border-[#c6a66b] bg-[#faf7f1]"
                          : "border-[#ded8ce] hover:border-[#c6a66b]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="mb-2 font-serif text-xl">
                            {service.name}
                          </h3>
                          <p className="text-xs text-[#82796E]">
                            {service.duration}
                          </p>
                        </div>

                        <span className="text-sm font-medium">
                          ${service.price}+
                        </span>
                      </div>

                      {selected && (
                        <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a17c3e]">
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
                <CalendarDays className="mb-4 text-[#c6a66b]" size={25} />
                <h2 className="font-serif text-3xl">Choose Your Appointment</h2>
                <p className="mt-2 text-sm text-[#82796E]">
                  Select your preferred date and time.
                </p>
              </div>

              <label className="mb-3 block text-xs tracking-[0.15em]">
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
                <Clock size={18} className="text-[#c6a66b]" />
                <h3 className="text-xs tracking-[0.15em]">
                  AVAILABLE TIME OPTIONS
                </h3>
              </div>

              {!date ? (
                <p className="bg-[#F1EBDD]/70 backdrop-blur-sm p-5 text-sm text-[#777066]">
                  Please select a date to view the sample time options.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`border px-4 py-4 text-sm transition ${
                        time === slot
                          ? "border-[#c6a66b] bg-[#F1EBDD]/70 backdrop-blur-sm"
                          : "border-[#ded8ce] hover:border-[#c6a66b]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-5 text-xs leading-6 text-[#9a9388]">
                These are sample time options for the website demo, not live
                appointment availability.
              </p>
            </div>
          )}

          {/* STEP 3: CLIENT DETAILS */}
          {step === 3 && (
            <div>
              <div className="mb-8">
                <Sparkles className="mb-4 text-[#c6a66b]" size={25} />
                <h2 className="font-serif text-3xl">Your Information</h2>
                <p className="mt-2 text-sm text-[#82796E]">
                  Tell us a little about yourself.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs tracking-[0.15em]">
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
                  <label className="mb-2 block text-xs tracking-[0.15em]">
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
                  <label className="mb-2 block text-xs tracking-[0.15em]">
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
                  <label className="mb-2 block text-xs tracking-[0.15em]">
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
                <CheckCircle2 className="mb-4 text-[#c6a66b]" size={26} />
                <h2 className="font-serif text-3xl">Review Your Request</h2>
                <p className="mt-2 text-sm text-[#82796E]">
                  Make sure everything looks correct before submitting.
                </p>
              </div>

              <div className="space-y-5 bg-[#F1EBDD]/70 backdrop-blur-sm p-6">
                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#82796E]">
                    SERVICE
                  </p>
                  <p className="font-serif text-xl">{selectedService?.name}</p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#82796E]">
                    DATE & TIME
                  </p>
                  <p className="text-sm">
                    {date} at {time}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#82796E]">
                    CLIENT
                  </p>
                  <p className="text-sm">{details.name}</p>
                  <p className="text-sm">{details.email}</p>
                  <p className="text-sm">{details.phone}</p>
                </div>

                {details.notes && (
                  <div>
                    <p className="mb-1 text-[10px] tracking-[0.2em] text-[#82796E]">
                      NOTES
                    </p>
                    <p className="text-sm">{details.notes}</p>
                  </div>
                )}

                <div className="border-t border-[#d8d0c3] pt-5">
                  <p className="mb-1 text-[10px] tracking-[0.2em] text-[#82796E]">
                    ESTIMATED STARTING PRICE
                  </p>
                  <p className="font-serif text-2xl">
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
          <div className="mt-10 flex items-center justify-between border-t border-[#ded8ce] pt-7">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="flex items-center gap-2 text-xs tracking-[0.15em] text-[#777066] hover:text-[#c6a66b]"
              >
                <ArrowLeft size={16} />
                BACK
              </button>
            ) : (
              <Link
                href="/"
                className="text-xs tracking-[0.15em] text-[#777066] hover:text-[#c6a66b]"
              >
                CANCEL
              </Link>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canContinue()}
                className="flex items-center gap-3 bg-[#211D19] px-7 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#c6a66b] disabled:cursor-not-allowed disabled:opacity-40"
              >
                CONTINUE
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submitBooking}
                className="bg-[#211D19] px-7 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#c6a66b]"
              >
                SUBMIT REQUEST
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#9a9388]">
          By continuing, you acknowledge that this is a frontend demo booking
          experience.
        </p>
      </div>
    </section>
  );
}
