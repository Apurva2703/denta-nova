import { useState } from "react";
import { motion } from "motion/react";
import { Baby, Braces, Scissors, Sparkles, Stethoscope, Syringe } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import specialtiesImg from "@/assets/specialties.jpg";

const specialties = [
  {
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    text: "Complex extractions, impacted wisdom teeth, bone grafting and surgical implant placement handled in-house under strict sterile protocol, with sedation available.",
  },
  {
    icon: Braces,
    title: "Orthodontics",
    text: "Clear aligners, ceramic and self-ligating braces planned with 3D simulation so you can see the projected movement of every tooth before treatment starts.",
  },
  {
    icon: Syringe,
    title: "Implantology",
    text: "Guided implant surgery using CBCT-planned surgical stents for precise positioning, shorter healing and crowns that match your natural teeth in shade and contour.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    text: "Child-friendly visits built around trust, not force. Preventive sealants, fluoride application and habit counselling delivered by a dentist trained specifically for young patients.",
  },
  {
    icon: Stethoscope,
    title: "Endodontics",
    text: "Microscope-assisted root canal therapy with rotary instrumentation — usually completed in a single visit and far more comfortable than its reputation suggests.",
  },
  {
    icon: Sparkles,
    title: "Periodontics",
    text: "Deep cleaning, laser-assisted gum therapy and regenerative procedures to stabilise the foundation that holds your teeth in place.",
  },
];

export function SpecialtiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-soft-mint/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-mint/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialities"
          title="A Full Specialist Team Under One Roof"
          description="Instead of referring you across the city, our clinicians cover every major dental discipline in the same building — so complex cases are planned together in one conversation."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="shadow-card relative overflow-hidden rounded-[2.5rem] border border-border">
              <img
                src={specialtiesImg}
                alt="Specialist dental operatory at CARE 32 Dental Care Center"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-[26rem] w-full object-cover lg:h-[34rem]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-border/60 bg-card/85 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase">
                  Currently viewing
                </p>
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-1 text-lg font-semibold text-navy"
                >
                  {specialties[active]?.title}
                </motion.p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {specialties.map((s, i) => {
              const isActive = i === active;
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <motion.button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={`flex w-full gap-4 rounded-3xl border p-5 text-left transition-colors ${
                      isActive
                        ? "shadow-card border-primary/40 bg-card"
                        : "border-border bg-card/60 hover:bg-card"
                    }`}
                  >
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        isActive ? "gradient-primary" : "bg-soft-blue"
                      }`}
                    >
                      <s.icon
                        className={`size-6 ${isActive ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </span>
                    <span className="block">
                      <span className="block text-base font-semibold text-navy">{s.title}</span>
                      <motion.span
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.75 }}
                        className="mt-1.5 block text-sm leading-relaxed text-slate"
                      >
                        {s.text}
                      </motion.span>
                    </span>
                  </motion.button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
