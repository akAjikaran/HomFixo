"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock, MapPin, MessageCircle, Wrench } from "lucide-react";
import { contact, services } from "@/data/home";
import { SectionHeading } from "./section-heading";

const timeSlots = ["Morning", "Afternoon", "Evening", "Urgent / ASAP"];
const jaffnaAreas = [
  "Jaffna Town",
  "Nallur",
  "Kopay",
  "Chunnakam",
  "Manipay",
  "Point Pedro",
  "Tellippalai",
  "Other Jaffna area",
];

export function BookingSection() {
  const [service, setService] = useState(services[0]?.title ?? "");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning");
  const [details, setDetails] = useState("");

  const canBook = service && area && date && time && details.trim().length > 0;

  const whatsappHref = useMemo(() => {
    const message = [
      "Hi Homfixo, I want to book a repair service.",
      "",
      `Service: ${service || "-"}`,
      `Location: ${area || "-"}`,
      `Preferred date: ${date || "-"}`,
      `Preferred time: ${time || "-"}`,
      `Issue: ${details.trim() || "-"}`,
    ].join("\n");

    return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [area, date, details, service, time]);

  return (
    <section id="booking" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Book via WhatsApp"
          title="Book a Service"
          description="Share the service, location, date, time, and issue. We will receive it as a clear WhatsApp booking request."
        />

        <div className="mx-auto mt-10 grid gap-6 rounded-lg border border-slate-200 bg-white p-4 shadow-card md:grid-cols-[1fr_0.85fr] sm:p-6">
          <form className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-ink">
              <span className="inline-flex items-center gap-2">
                <Wrench size={16} className="text-brand-500" />
                Service
              </span>
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-12 rounded border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              >
                {services.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ink">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-brand-500" />
                  Area in Jaffna
                </span>
                <select
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                  className="h-12 rounded border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Select area</option>
                  {jaffnaAreas.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-ink">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-brand-500" />
                  Preferred Date
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="h-12 rounded border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-ink">
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-brand-500" />
                Preferred Time
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={[
                      "min-h-11 rounded border px-3 text-sm font-bold transition",
                      time === slot
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-700",
                    ].join(" ")}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </label>

            <label className="grid gap-2 text-sm font-bold text-ink">
              Issue Details
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                rows={5}
                placeholder="Example: AC is not cooling, fridge has leakage, laptop is not turning on..."
                className="resize-none rounded border border-slate-200 bg-white px-3 py-3 text-sm font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </label>
          </form>

          <aside className="flex flex-col justify-between rounded bg-slate-50 p-5">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-600">
                Booking Preview
              </p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-bold text-ink">Service:</span> {service || "-"}
                </p>
                <p>
                  <span className="font-bold text-ink">Location:</span> {area || "-"}
                </p>
                <p>
                  <span className="font-bold text-ink">Date:</span> {date || "-"}
                </p>
                <p>
                  <span className="font-bold text-ink">Time:</span> {time || "-"}
                </p>
                <p className="leading-6">
                  <span className="font-bold text-ink">Issue:</span>{" "}
                  {details.trim() || "Tell us the problem you want fixed."}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={canBook ? whatsappHref : undefined}
                aria-disabled={!canBook}
                className={[
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition",
                  canBook
                    ? "bg-whatsapp-500 hover:bg-whatsapp-600"
                    : "pointer-events-none bg-slate-300",
                ].join(" ")}
              >
                <MessageCircle size={17} />
                Book via WhatsApp
              </a>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                The button opens WhatsApp with your booking details already filled in.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
