import { motion } from "motion/react";
import { Headphones, HeartPulse, Syringe, Timer } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import comfortImg from "@/assets/comfort-patient.jpg";

const items = [
  {
    icon: Syringe,
    title: "Virtually Painless Anaesthesia",
    text: "We apply a topical numbing gel first, then deliver anaesthetic slowly with fine-gauge needles and computer-assisted flow control. Most patients tell us they never felt the injection at all.",
  },
  {
    icon: HeartPulse,
    title: "Dental Anxiety Support",
    text: "If dentistry makes you nervous, say so — it changes how we work. Longer appointments, agreed stop signals, step-by-step narration and optional sedation put you back in control of the chair.",
  },
  {
    icon: Headphones,
    title: "A Calmer Environment",
    text: "Soft lighting, noise-cancelling headphones, weighted blankets and warm towels are available on request. Small details matter when you are lying in a dental chair for an hour.",
  },
  {
    icon: Timer,
    title: "Respect for Your Time",
    text: "We schedule generously so appointments start on time and never feel rushed. Where clinically sensible, we combine procedures so you make fewer trips to the clinic.",
  },
];

export function ComfortSection() {
  return (
    <section className="relative overflow-hidden bg-soft-mint/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-mint/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Comfort First"
              title="Dentistry That Respects How You Feel"
              description="Fear of the dentist is common and completely valid. Our clinical protocols are built around lowering that anxiety — not just treating the tooth in front of us."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="h-full rounded-3xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-sm hover:shadow-card"
                  >
                    <span className="gradient-primary flex size-11 items-center justify-center rounded-2xl">
                      <it.icon className="size-5 text-primary-foreground" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-navy">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{it.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="shadow-card overflow-hidden rounded-[3rem] border border-border">
                <img
                  src={comfortImg}
                  alt="Relaxed patient wearing headphones in a modern dental chair"
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="h-[24rem] w-full object-cover sm:h-[32rem]"
                />
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -bottom-6 -left-2 rounded-3xl px-5 py-4 shadow-soft sm:left-6"
              >
                <p className="text-2xl font-bold text-gradient">96%</p>
                <p className="text-xs text-slate">Report a pain-free visit</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
