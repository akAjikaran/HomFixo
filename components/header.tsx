import { Menu, MessageCircle } from "lucide-react";
import { contact, navItems } from "@/data/home";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-brand-600" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={contact.whatsapp}
            className="hidden min-w-40 items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-6 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-whatsapp-600 sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp Now
          </a>
          <details className="group relative md:hidden">
            <summary
              aria-label="Open menu"
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-slate-200 text-slate-800 marker:hidden"
            >
              <Menu size={20} />
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-card">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="block rounded px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-whatsapp-600"
                href={contact.whatsapp}
              >
                <MessageCircle size={15} />
                WhatsApp Now
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
