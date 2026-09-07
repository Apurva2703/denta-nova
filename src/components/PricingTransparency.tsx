import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import consultation from "@/assets/consultation.jpg";

const blocks = [
  {
    title: "Written estimates, always",
    text: "Before any treatment starts you receive an itemised estimate covering consultation, materials, lab work and review visits. If the clinical picture changes mid-treatment, we pause and re-quote rather than surprise you afterwards.",
  },
  {
    title: "Options at three levels",
    text: "Most problems have a conservative, a standard and a premium solution. We present all three with their honest lifespan, aesthetics and cost, so you can choose what fits your budget rather than being sold the most expensive route.",
  },
  {
    title: "Insurance & claims help",
    text: "Our front desk pre-verifies coverage with major insurers, submits documentation on your behalf and tells you the expected out-of-pocket figure before your appointment date.",
  },
  {
    title: "Flexible payment plans",
    text: "Larger treatments such as implants, full-mouth rehabilitation and orthodontics can be split into interest-free monthly instalments across the treatment period.",
  },
];

export function PricingTransparency() {
  return (
    <section className="relative overflow-hidden bg-soft-blue/60 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pricing & Payments"
              title="No Hidden Costs, No Pressure Selling"
              description="Dental anxiety is often financial as much as clinical. We remove that uncertainty with clear numbers, honest alternatives and payment structures that fit real budgets."
            />
            <div className="mt-8 space-y-4">
              {blocks.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex gap-4 rounded-3xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-sm hover:shadow-card"
                  >
                    <span className="gradient-primary flex size-9 shrink-0 items-center justify-center rounded-xl">
                      <Check className="size-5 text-primary-foreground" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{b.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="shadow-card overflow-hidden rounded-[2.5rem] border border-border">
                <img
                  src={consultation}
                  alt="Front desk team reviewing a written treatment estimate with a patient"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-80 w-full object-cover sm:h-[28rem]"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -bottom-6 left-6 rounded-3xl px-5 py-4 shadow-soft"
              >
                <p className="text-2xl font-bold text-gradient">0% EMI</p>
                <p className="text-xs text-slate">Interest-free instalments</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
