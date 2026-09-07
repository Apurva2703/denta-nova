import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import clinic from "@/assets/clinic-interior.jpg";
import smile from "@/assets/smile.jpg";

const pillars = [
  {
    title: "Conservative by default",
    text: "We remove as little natural tooth structure as possible. Nothing man-made outperforms healthy enamel, so preservation always comes before replacement in our treatment planning.",
  },
  {
    title: "Evidence over trends",
    text: "Techniques and materials enter our clinic only after long-term data supports them. Our clinicians publish, teach and attend continuing education every year to keep that standard.",
  },
  {
    title: "Whole-person dentistry",
    text: "Grinding, sleep quality, diet, medication and stress all show up in the mouth. We look at the causes behind the damage instead of repeatedly repairing the symptoms.",
  },
  {
    title: "Informed consent, genuinely",
    text: "You will never be asked to approve a plan you do not understand. We use scans, photos and plain language until the reasoning is completely clear to you.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="shadow-card overflow-hidden rounded-[2.5rem] border border-border"
              >
                <img
                  src={clinic}
                  alt="Interior of CARE 32 Dental Care Center"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="shadow-glow absolute -right-2 -bottom-12 w-44 overflow-hidden rounded-3xl border-4 border-background sm:w-56"
              >
                <img
                  src={smile}
                  alt="Close-up of a healthy natural smile"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-36 w-full object-cover sm:h-44"
                />
              </motion.div>
              <div className="glass absolute -top-6 -left-3 rounded-2xl px-4 py-3 shadow-soft">
                <p className="text-xl font-bold text-gradient">18+ yrs</p>
                <p className="text-[0.7rem] text-slate">Of conservative practice</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 lg:mt-0">
            <SectionHeading
              align="left"
              eyebrow="Our Philosophy"
              title="The Principles Behind Every Decision We Make"
              description="CARE 32 was founded on a simple frustration: dentistry too often felt transactional. We built a studio where clinical excellence and genuine care are not treated as separate things."
            />
            <div className="mt-8 divide-y divide-border border-y border-border">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <motion.div whileHover={{ x: 6 }} className="group flex gap-5 py-5">
                    <span className="text-lg font-bold text-primary/50 transition-colors group-hover:text-primary">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{p.text}</p>
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
