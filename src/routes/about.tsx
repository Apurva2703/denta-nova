import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { PhilosophySection } from "@/components/PhilosophySection";
import { HygieneSection } from "@/components/HygieneSection";
import { ComfortSection } from "@/components/ComfortSection";
import { ProcessSection } from "@/components/ProcessSection";

const title = "About CARE 32 Dental Care Center | Our Story & Philosophy";
const description =
  "Meet the team behind CARE 32 Dental Care Center: experienced clinicians, advanced dental technology and a patient-first approach to comfortable care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Where Technology Meets Compassionate Care"
        description="We combine experienced dental professionals, advanced equipment and a patient-first approach to make every dental visit comfortable, transparent and personalized."
      />
      <AboutSection />
      <PhilosophySection />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <ComfortSection />
      <HygieneSection />
      <Testimonials />
    </>
  );
}
