import {
  AirVent,
  Bolt,
  Droplets,
  Laptop,
  Refrigerator,
  Tv,
} from "lucide-react";

export const contact = {
  phone: "+94 77 906 0372",
  whatsapp: "https://wa.me/94779060372",
  location: "Jaffna",
};

export function createWhatsAppLink(message: string) {
  return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsAppMessage(service: string) {
  return `Hi Homfixo, I need help with ${service} in Jaffna.`;
}

export const generalWhatsAppMessage =
  "Hi Homfixo, I need help with a repair service in Jaffna.";

export const appointmentWhatsAppMessage =
  "Hi Homfixo, I want to book an appointment for a repair service in Jaffna.";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Book an appointment", href: "#booking" },
  { label: "Contact us", href: "#contact" },
];

export const heroServices = [
  { label: "Laptop Repair", icon: Laptop },
  { label: "AC Repair", icon: AirVent },
  { label: "Fridge Repair", icon: Refrigerator },
  { label: "TV Repair", icon: Tv },
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Bolt },
];

export const workSteps = [
  {
    title: "Message us on WhatsApp",
    body: "Start a chat instantly",
    image: "/images/how-it-works-1.png",
  },
  {
    title: "Share details / photo",
    body: "(Optional) Send photos of the issue",
    image: "/images/how-it-works-2.png",
  },
  {
    title: "We schedule & assign",
    body: "Technician arrives on time",
    image: "/images/how-it-works-3.png",
  },
];

export const services = [
  {
    title: "Laptop & Computer Repair",
    description:
      "Repairs and troubleshooting for laptops, desktop computers, slow systems, startup issues, and hardware faults.",
    highlights: ["Laptop service", "Software troubleshooting", "Hardware fault checks"],
    icon: Laptop,
  },
  {
    title: "AC Repair & Cleaning",
    description:
      "AC servicing, deep cleaning, gas checks, drainage fixes, cooling issues, and installation support.",
    highlights: ["AC cleaning", "Cooling issue repair", "Gas and drainage checks"],
    icon: AirVent,
  },
  {
    title: "Refrigerator Repair",
    description:
      "Repair support for fridge cooling problems, water leakage, compressor faults, thermostat issues, and unusual noise.",
    highlights: ["Cooling faults", "Leakage repair", "Compressor checks"],
    icon: Refrigerator,
  },
  {
    title: "TV Repair",
    description:
      "Service for LED, LCD, and smart TVs with display problems, sound faults, power issues, and setup needs.",
    highlights: ["Display issues", "Sound and power faults", "Smart TV setup"],
    icon: Tv,
  },
  {
    title: "Plumbing Services",
    description:
      "Leaks, pipe repairs, bathroom fittings, tap repairs, drainage issues, and water tank connections.",
    highlights: ["Leak fixing", "Tap and mixer repair", "Drainage support"],
    icon: Droplets,
  },
  {
    title: "Electrical Services",
    description:
      "Electrical repairs for switches, sockets, wiring, lighting, fans, breakers, and basic safety checks.",
    highlights: ["Socket repair", "Fan and light fitting", "Wiring checks"],
    icon: Bolt,
  },
];
