import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import hygieneImg from "@/assets/hygiene.jpg";
import clinic from "@/assets/clinic-interior.jpg";

const protocols = [
  {
    title: "Single-use where it counts",
    text: "Needles, blades, suction tips, gloves, bibs and polishing cups are opened in front of you and discarded after a single patient. Nothing disposable is ever reused.",
  },
  {
    title: "Class B autoclave sterilisation",
    text: "Reusable instruments are ultrasonically cleaned, pouched, then sterilised in a vacuum autoclave with every cycle logged and periodically spore-tested for verification.",
  },
  {
    title: "Surface & air control",
    text: "Every operatory is wiped down with hospital-grade disinfectant between patients, and HEPA filtration with high-volume evacuation reduces aerosol in the room.",
  },
  {
    title: "Water line management",
    text: "Dental unit waterlines are flushed and treated on a fixed schedule so the water touching your mouth meets drinking-water standards.",
  },
];

export function HygieneSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-cyan-soft/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="shadow-card overflow-hidden rounded-[3rem] border border-border">
              <img
                src={hygieneImg}
                alt="Sterilised dental instruments in a sealed pouch held by a clinician"
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="shadow-glow absolute -right-2 -bottom-10 w-40 overflow-hidden rounded-3xl border-4 border-background sm:w-52"
            >
              <img
                src={clinic}
                alt="Operatory prepared for the next patient at CARE 32"
                loading="lazy"
                width={1280}
                height={960}
                className="h-32 w-full object-cover sm:h-40"
              />
            </motion.div>
            <div className="glass absolute -top-5 -left-3 rounded-2xl px-4 py-3 shadow-soft">
              <p className="text-xl font-bold text-gradient">100%</p>
              <p className="text-[0.7rem] text-slate">Cycles logged & verified</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Safety & Hygiene"
            title="Sterilisation You Can Actually Verify"
            description="Infection control is the least visible part of dentistry and the part we take most seriously. Here is exactly what happens between one patient leaving the chair and you sitting in it."
          />
          <div className="mt-8 divide-y divide-border border-y border-border">
            {protocols.map((p, i) => (
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
    </section>
  );
}
