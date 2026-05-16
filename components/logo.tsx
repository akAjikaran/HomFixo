type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "dark" }: LogoProps) {
  const logoSrc = tone === "light" ? "/images/logo-footer.png" : "/images/logo-header.png";

  return (
    <a href="#" className="inline-flex items-center" aria-label="Homfixo home">
      <img
        src={logoSrc}
        alt="Homfixo"
        className="h-9 w-auto object-contain"
      />
    </a>
  );
}
