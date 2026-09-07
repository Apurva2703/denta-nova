import { motion } from "motion/react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute -top-20 right-0 size-96 rounded-full bg-cyan-soft/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-mint/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase shadow-soft"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-4 text-base leading-relaxed text-slate"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
