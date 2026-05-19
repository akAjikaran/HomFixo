"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  appointmentWhatsAppMessage,
  createWhatsAppLink,
  heroServices,
  serviceWhatsAppMessage,
} from "@/data/home";
import { WhatsAppIcon } from "./whatsapp-icon";

const heroImages = [
  "/images/hero-technician-1.png",
  "/images/hero-technician-2.png",
  "/images/hero-technician-3.png",
  "/images/hero-technician-4.png",
  "/images/hero-technician-5.png",
];

export function Hero() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const whatsappHref = selectedService
    ? createWhatsAppLink(serviceWhatsAppMessage(selectedService))
    : createWhatsAppLink(appointmentWhatsAppMessage);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8">
        <div>
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-normal text-ink sm:text-4xl lg:text-5xl">
           Find Home Repair Experts Near You in Jaffna & Mannar
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Book trusted technicians for appliance repairs, plumbing, electrical work,
            AC servicing, and general home maintenance with quick WhatsApp support.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-3">
            {heroServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  type="button"
                  key={service.label}
                  onClick={() => setSelectedService(service.label)}
                  className="flex min-h-16 items-center gap-3 rounded border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition hover:border-brand-500 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-gray-100 text-brand-600">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-bold text-slate-800">{service.label}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={createWhatsAppLink(appointmentWhatsAppMessage)}
              className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-whatsapp-600"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-brand-500 hover:text-brand-700"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="absolute -right-8 top-8 h-52 w-52 rounded-full bg-brand-100 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-slate-200 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] bg-slate-100 shadow-soft">
            <div className="relative h-[480px] w-full sm:h-[540px] lg:h-[500px]">
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Local home service technician with tools"
                  className={[
                    "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out",
                    index === activeImage ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={`${image}-dot`}
                  type="button"
                  aria-label={`Show hero image ${index + 1}`}
                  onClick={() => setActiveImage(index)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    index === activeImage ? "w-8 bg-brand-500" : "w-2.5 bg-white/80",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedService ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-popup-title"
        >
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  {selectedService}
                </p>
                <h2 id="service-popup-title" className="mt-2 text-xl font-extrabold text-ink">
                  Message us via WhatsApp
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setSelectedService(null)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Tell us the issue, your location in Jaffna, and your preferred time. Our
              team will confirm availability and guide you on the next step.
            </p>
            <a
              href={whatsappHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-whatsapp-600"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
