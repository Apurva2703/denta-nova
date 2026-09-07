import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DoctorCard } from "@/components/DoctorCard";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ComfortSection } from "@/components/ComfortSection";
import { doctors } from "@/data/doctors";

const title = "Meet Our Dentists | CARE 32 Dental Care Center";
const description =
  "Experienced dental surgeons, orthodontists, implantologists and pediatric dentists at CARE 32. View profiles, availability and book directly.";

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet Our Dental Experts"
        description="Our experienced dental professionals combine clinical expertise, advanced technology and a gentle approach to help every patient achieve a healthier, more confident smile."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl justify-center gap-6 px-4 sm:px-6 lg:px-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),22rem))]">
          {doctors.map((d, i) => (
            <DoctorCard key={d.slug} doctor={d} index={i} />
          ))}
        </div>
      </section>
      <SpecialtiesSection />
      <PhilosophySection />
      <ComfortSection />
    </>
  );
}
