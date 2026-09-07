import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqSection } from "@/components/FaqSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingTransparency } from "@/components/PricingTransparency";
import { ComfortSection } from "@/components/ComfortSection";
import { services } from "@/data/services";

const title = "Dental Services | Implants, Cosmetic & Orthodontics — CARE 32";
const description =
  "Explore CARE 32's complete range of dental treatments: general dentistry, implants, whitening, orthodontics, root canals, pediatric and emergency care.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Treatments"
        title="Advanced Dental Treatments for Every Smile"
        description="Explore our complete range of dental services designed to protect your oral health, restore function and create a smile you feel confident sharing."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>
      <SpecialtiesSection />
      <ProcessSection />
      <PricingTransparency />
      <ComfortSection />
      <FaqSection />
    </>
  );
}
