import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";
import doctor from "@/assets/doctor-1.jpg";
import { Reveal } from "./Reveal";

const points = [
  "Experienced professionals across every dental specialty",
  "Modern equipment for accurate diagnosis and planning",
  "Personalized treatment plans with transparent pricing",
  "Strict hygiene and sterilisation protocols",
];

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="shadow-card overflow-hidden rounded-[2.5rem] border border-border">
            <img
              src={clinic}
              alt="Bright modern treatment room at CARE 32 Dental Care Center"
              loading="lazy"
              width={1280}
              height={960}
              className="size-full object-cover"
            />
          </div>
          <div className="glass shadow-card absolute -bottom-8 left-4 flex w-64 items-center gap-3 rounded-2xl p-4 sm:left-8">
            <img
              src={doctor}
              alt="Dr. Avinash Yele, Chief Dental Surgeon"
              loading="lazy"
              width={800}
              height={1000}
              className="size-14 rounded-xl object-cover"
            />
            <span>
              <span className="block text-sm font-semibold text-navy">Dr. Avinash Yele</span>
              <span className="text-xs text-slate">Chief Dental Surgeon</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-10 lg:mt-0">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-soft-mint px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase">
              About CARE 32
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Where Technology Meets Compassionate Care
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              We combine experienced dental professionals, advanced equipment and a patient-first
              approach to make every dental visit comfortable, transparent and personalized.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3.5">
            {points.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <li className="flex items-start gap-3 text-sm text-navy/85">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.25}>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue"
            >
              More About Our Studio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
