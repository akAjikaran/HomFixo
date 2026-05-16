import { Wrench } from "lucide-react";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <a href="#" className="inline-flex items-center gap-2" aria-label="Homfixo home">
      <span className="grid h-8 w-8 place-items-center rounded bg-brand-500 text-white">
        <Wrench size={17} strokeWidth={2.4} />
      </span>
      <span className={["text-base font-bold tracking-normal", tone === "light" ? "text-white" : "text-navy"].join(" ")}>
        Homfixo
      </span>
    </a>
  );
}
