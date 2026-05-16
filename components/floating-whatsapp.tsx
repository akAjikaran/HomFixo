import { createWhatsAppLink, generalWhatsAppMessage } from "@/data/home";
import { WhatsAppIcon } from "./whatsapp-icon";

export function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink(generalWhatsAppMessage)}
      className="fixed bottom-4 right-4 z-50 inline-flex min-w-14 items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-whatsapp-600 sm:min-w-44"
      aria-label="Chat with Homfixo on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">WhatsApp Now</span>
    </a>
  );
}
