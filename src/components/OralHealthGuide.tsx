import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import oralCare from "@/assets/oral-care.jpg";

const habits = [
  {
    title: "Brush for two minutes, twice daily",
    text: "Use a soft-bristled or electric brush at a 45-degree angle to the gumline. Pressure damages enamel and gums far more than it cleans — let the bristles do the work, not your arm.",
  },
  {
    title: "Clean between the teeth every day",
    text: "A brush reaches roughly 60% of tooth surfaces. Floss or interdental brushes handle the remaining 40%, which is exactly where most cavities and gum disease begin.",
  },
  {
    title: "Do not rinse after brushing",
    text: "Spit out the excess toothpaste but skip the water. Leaving a thin fluoride film on the enamel overnight measurably reduces decay risk.",
  },
  {
    title: "Watch frequency, not just quantity, of sugar",
    text: "Six small sugary snacks across a day cause more damage than one dessert. Each exposure restarts a 20-minute acid attack on your enamel.",
  },
  {
    title: "Treat bleeding gums as a warning",
    text: "Healthy gums do not bleed when brushed. Bleeding is early inflammation and is almost always reversible if addressed within weeks rather than years.",
  },
  {
    title: "Keep six-monthly check-ups",
    text: "Cavities and gum disease are painless in their earliest and cheapest stages. Routine visits catch them before they need root canals or extractions.",
  },
];

export function OralHealthGuide() {
  return (
    <section className="relative overflow-hidden bg-soft-blue/60 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative">
              <div className="shadow-card overflow-hidden rounded-[3rem] border border-border">
                <img
                  src={oralCare}
                  alt="Woman brushing her teeth as part of a daily oral care routine"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-80 w-full object-cover sm:h-[26rem]"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -right-2 -bottom-6 rounded-3xl px-5 py-4 shadow-soft"
              >
                <p className="text-2xl font-bold text-gradient">8 in 10</p>
                <p className="text-xs text-slate">Treatments are preventable</p>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Everyday Care"
              title="The Habits That Prevent Most Dental Work"
              description="Around eight out of ten treatments we perform could have been avoided with better daily routines. These are the evidence-based basics our hygienists repeat most often."
            />
            <div className="mt-8 space-y-3">
              {habits.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-border hover:bg-card"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-bold text-primary-dark shadow-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate">{h.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
