import { motion } from "motion/react";
import { Brain, Radiation, ScanLine, Waves } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Radiation, title: "Digital X-Ray", text: "Up to 80% less radiation with instant, enhanced images." },
  { icon: ScanLine, title: "3D Dental Scanning", text: "Impression-free scans captured in under five minutes." },
  { icon: Brain, title: "AI-Assisted Diagnostics", text: "Early detection support for decay and bone changes." },
  { icon: Waves, title: "Advanced Imaging", text: "CBCT planning for precise, predictable surgery." },
];

export function TechnologySection() {
  return (
    <section className="gradient-tech relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute top-10 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-cyan-soft/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Technology That Makes Dentistry Better"
          description="Modern technology allows us to diagnose accurately, plan treatments intelligently and provide a more comfortable experience for every patient."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-5">
            {items.slice(0, 2).map((it, i) => (
              <TechCard key={it.title} {...it} delay={i * 0.1} />
            ))}
          </div>

          <div className="relative mx-auto flex size-64 items-center justify-center sm:size-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-soft/50 to-white blur-2xl" />
            <div className="spin-slow absolute inset-4 rounded-full border border-dashed border-primary/40" />
            <div className="spin-slow absolute inset-12 rounded-full border border-primary/20" />
            <motion.div
              animate={{ y: [0, -14, 0], rotateY: [0, 18, 0, -18, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="glass shadow-glow relative flex size-40 items-center justify-center rounded-[2.5rem] sm:size-48"
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg viewBox="0 0 24 24" className="size-24 sm:size-28" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8DDEEA" />
                    <stop offset="100%" stopColor="#1689A5" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z"
                  fill="url(#toothGrad)"
                />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5">
            {items.slice(2).map((it, i) => (
              <TechCard key={it.title} {...it} delay={i * 0.1 + 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  icon: Icon,
  title,
  text,
  delay,
}: {
  icon: typeof Brain;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="glass shadow-soft flex items-start gap-4 rounded-2xl p-5"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-soft-blue text-primary-dark">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block font-semibold text-navy">{title}</span>
        <span className="mt-1 block text-sm text-slate">{text}</span>
      </span>
    </motion.div>
  );
}
