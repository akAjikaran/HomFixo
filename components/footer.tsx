import { Mail, MapPin, Phone } from "lucide-react";
import { contact, services } from "@/data/home";
import { Logo } from "./logo";

export function Footer() {
  const mainServices = services.slice(0, 6);

  return (
    <footer className="bg-slate-950 px-4 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Homfixo connects Jaffna households and small businesses with reliable local
            technicians for appliance, computer, plumbing, and electrical repairs.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">Our Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {mainServices.map((service) => (
              <li key={service.title}>
                <a className="hover:text-white" href="#services">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">Service Areas</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["Jaffna Town", "Nallur", "Kopay", "Chunnakam", "Manipay", "Point Pedro"].map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-500" />
              {contact.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-500" />
              hello@homfixo.lk
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
              Jaffna, Sri Lanka
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Homfixo. All rights reserved.</p>
        <p>Privacy Policy | Terms and Conditions</p>
      </div>
    </footer>
  );
}
