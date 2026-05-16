import {
  AirVent,
  Bolt,
  CalendarCheck,
  CheckCircle2,
  Droplets,
  Home,
  Laptop,
  Refrigerator,
  Tv,
} from "lucide-react";

export const contact = {
  phone: "+94 77 906 0372",
  whatsapp: "https://wa.me/94779060372",
  location: "Jaffna",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
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
    body: "Tell us the device, appliance, or home repair issue and your Jaffna location.",
    icon: CheckCircle2,
  },
  {
    title: "Share details or photos",
    body: "Send photos, model details, or fault symptoms so we can prepare the right technician.",
    icon: Home,
  },
  {
    title: "We schedule and arrive",
    body: "A suitable local technician visits your home, office, or shop at the confirmed time.",
    icon: CalendarCheck,
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
