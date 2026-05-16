type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-ink sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
