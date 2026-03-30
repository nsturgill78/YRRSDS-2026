type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d83a34]">
          {eyebrow}
        </div>
      ) : null}
      <Heading className="text-3xl font-bold tracking-tight md:text-4xl">{title}</Heading>
      {description ? <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600">{description}</p> : null}
    </div>
  );
}
