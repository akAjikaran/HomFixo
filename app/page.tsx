import { BookingSection } from "@/components/booking-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HelpCta } from "@/components/help-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ServicesSection />
      <BookingSection />
      <HelpCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
