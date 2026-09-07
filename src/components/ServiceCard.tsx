import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  AlignHorizontalDistributeCenter,
  Anchor,
  ArrowRight,
  Baby,
  ShieldCheck,
  Siren,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Sparkles,
  Anchor,
  Sun,
  AlignHorizontalDistributeCenter,
  Activity,
  Baby,
  Siren,
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = icons[service.icon] ?? Sparkles;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card [transform-style:preserve-3d]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-soft-blue/0 to-soft-mint/0 opacity-0 transition-opacity duration-300 group-hover:from-soft-blue/70 group-hover:to-soft-mint/60 group-hover:opacity-100" />
      <div className="relative">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-soft-blue text-primary-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="size-6" />
        </span>
        <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate">{service.short}</p>
      </div>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.article>
  );
}
