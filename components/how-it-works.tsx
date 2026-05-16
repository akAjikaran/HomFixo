import { workSteps } from "@/data/home";
import { SectionHeading } from "./section-heading";

export function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Quick Booking"
          title="How It Works"
          description="A simple booking flow for busy households, tenants, landlords, and shop owners."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {workSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded border border-slate-200 bg-white p-6 text-center shadow-card">
                <div className="mx-auto -mt-8 grid h-7 w-12 place-items-center rounded-full bg-lagoon text-sm font-bold text-white shadow-sm">
                  {index + 1}
                </div>
                <div className="mx-auto mt-7 grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-base font-extrabold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
