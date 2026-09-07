import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import smile from "@/assets/smile.jpg";

const cases = [
  { label: "Teeth Whitening", note: "Six shades brighter in one session" },
  { label: "Smile Design", note: "Eight porcelain veneers, natural finish" },
  { label: "Dental Implants", note: "Two implants with matched crowns" },
  { label: "Cosmetic Bonding", note: "Chip repair and edge reshaping" },
];

function Slider({ label, note }: { label: string; note: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div className="shadow-soft overflow-hidden rounded-3xl border border-border bg-card">
      <div
        ref={ref}
        className="relative aspect-4/3 cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
      >
        <img
          src={smile}
          alt={`${label} result after treatment`}
          loading="lazy"
          width={1200}
          height={900}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={smile}
            alt={`${label} before treatment`}
            loading="lazy"
            width={1200}
            height={900}
            className="size-full object-cover brightness-[0.86] saturate-[0.6] sepia-[0.35]"
          />
        </div>
        <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-navy">
          Before
        </span>
        <span className="glass absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-navy">
          After
        </span>
        <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
          <span className="shadow-glow absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MoveHorizontal className="size-5" />
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label={`${label} before and after comparison`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-3 mx-auto w-3/4 accent-[var(--primary)] opacity-0 focus-visible:opacity-100"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold">{label}</h3>
        <p className="mt-1 text-sm text-slate">{note}</p>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="bg-soft-blue/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title="Real Smiles. Real Transformations."
          description="See how personalized dental treatments can transform smiles while maintaining a natural and confident appearance."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <Slider {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
