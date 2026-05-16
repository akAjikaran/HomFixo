import { MapPin, Phone } from "lucide-react";
import { appointmentWhatsAppMessage, contact, createWhatsAppLink } from "@/data/home";
import { WhatsAppIcon } from "./whatsapp-icon";

export function HelpCta() {
  return (
    <section id="contact" className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">Need help now?</h2>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          Our team is ready to schedule laptop, AC, refrigerator, TV, plumbing, and
          electrical repair visits across Jaffna.
        </p>
        <a
          href={createWhatsAppLink(appointmentWhatsAppMessage)}
          className="mt-7 inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-whatsapp-600"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-200 sm:flex-row sm:gap-7">
          <span className="inline-flex items-center gap-2">
            <Phone size={15} />
            {contact.phone}
          </span>
          <span className="hidden h-4 w-px bg-slate-400 sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} />
            Jaffna, Sri Lanka
          </span>
        </div>
      </div>
    </section>
  );
}
