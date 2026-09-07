import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TechnologySection } from "@/components/TechnologySection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ComfortSection } from "@/components/ComfortSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { HygieneSection } from "@/components/HygieneSection";
import { PricingTransparency } from "@/components/PricingTransparency";
import { OralHealthGuide } from "@/components/OralHealthGuide";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

const title = "CARE 32 Dental Care Center | Premium Dental Care & Smile Design";
const description =
  "Advanced, comfortable dentistry in Pune. Implants, cosmetic dentistry, orthodontics and emergency care from experienced dentists at CARE 32 Dental Care Center.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />

      <section className="bg-soft-mint/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Dental Care Under One Roof"
            description="From preventive care to complete smile transformations, our dental team provides personalized treatments using modern techniques and advanced technology."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue"
              >
                View All Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SpecialtiesSection />
      <TechnologySection />
      <AboutSection />
      <PhilosophySection />
      <ProcessSection />
      <WhyChooseUs />
      <ComfortSection />
      <BeforeAfter />
      <HygieneSection />
      <PricingTransparency />
      <Testimonials />
      <OralHealthGuide />
      <FaqSection />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="gradient-primary shadow-glow relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center sm:px-16">
              <div className="pointer-events-none absolute -top-16 -right-10 size-64 rounded-full bg-white/15 blur-2xl" />
              <h2 className="text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl">
                A Brighter Smile. A Better You.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                Book a consultation today and receive a personalized treatment plan with clear
                timelines, transparent pricing and no obligation.
              </p>
              <Link
                to="/appointment"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
