import { motion } from "motion/react";
import { HeartPulse, Microscope, ShieldPlus, Siren, Stethoscope, UserRoundCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  { icon: Stethoscope, title: "Experienced Dentists", text: "Specialists across surgery, orthodontics, prosthodontics and pediatric care." },
  { icon: Microscope, title: "Advanced Technology", text: "Digital scanning, low-dose imaging and guided treatment planning." },
  { icon: HeartPulse, title: "Pain-Free Approach", text: "Gentle techniques and effective anaesthesia for calm, comfortable visits." },
  { icon: UserRoundCheck, title: "Personalized Treatment", text: "Plans built around your goals, budget and clinical priorities." },
  { icon: ShieldPlus, title: "Hygienic Environment", text: "Hospital-grade sterilisation and single-use instruments as standard." },
  { icon: Siren, title: "Emergency Support", text: "Same-day priority slots and a 24/7 helpline for urgent problems." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why CARE 32"
          title="Why Patients Choose CARE 32"
          description="From your first consultation to your final treatment, every part of your experience is designed around safety, comfort, technology and exceptional care."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              className="shadow-soft h-full rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card [transform-style:preserve-3d]"
            >
              <span className="flex size-13 items-center justify-center rounded-2xl bg-soft-mint text-primary-dark">
                <r.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
