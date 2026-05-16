import { CheckCircle2 } from "lucide-react";
import { createWhatsAppLink, services, serviceWhatsAppMessage } from "@/data/home";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Repair Services We Handle in Jaffna"
          description="Reliable help for homes, rentals, offices, and shops from local technicians who handle common device, appliance, plumbing, and electrical issues."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-card ring-1 ring-transparent transition hover:border-brand-500 hover:ring-brand-100"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-navy text-white">
                  <Icon size={23} />
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="shrink-0 text-brand-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href={createWhatsAppLink(serviceWhatsAppMessage(service.title))}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-whatsapp-600"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
