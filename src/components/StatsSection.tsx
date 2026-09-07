import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "K+", label: "Happy Patients" },
  { value: 25, suffix: "K+", label: "Successful Treatments" },
  { value: 4.9, suffix: "/5", label: "Patient Rating" },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setN(value * progress);
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, value]);

  const display = Number.isInteger(value) ? Math.round(n) : n.toFixed(1);
  return (
    <span className="text-gradient font-display text-4xl font-bold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Track Record"
          title="Dental Care Backed by Proven Results"
          description="Trusted by thousands of patients for comfortable, advanced and personalized dental care."
        />
        <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="shadow-soft h-full rounded-3xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-card">
                <Counter value={s.value} suffix={s.suffix} active={inView} />
                <p className="mt-3 text-sm font-medium text-slate">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
