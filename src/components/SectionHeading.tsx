import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: Props) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-border bg-soft-blue px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase">
          {eyebrow}
        </span>
      )}
      <Tag className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
    </Reveal>
  );
}
