import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { PageHeader } from "@/components/PageHeader";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Reveal } from "@/components/Reveal";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingTransparency } from "@/components/PricingTransparency";
import { ComfortSection } from "@/components/ComfortSection";
import { FaqSection } from "@/components/FaqSection";

const title = "Book a Dental Appointment | CARE 32 Dental Care Center";
const description =
  "Request an appointment at CARE 32 Dental Care Center. Choose your treatment, preferred doctor and time — our care team confirms within a few hours.";

const searchSchema = z.object({ doctor: z.string().optional() });

export const Route = createFileRoute("/appointment")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const { doctor } = Route.useSearch();

  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Book Your Visit With Confidence"
        description="Tell us what you need and our team will help you find the right treatment, doctor and appointment time for your dental care."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <Reveal>
            <AppointmentForm defaultDoctor={doctor ?? ""} />
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass shadow-card h-full rounded-3xl p-8">
              <h2 className="text-xl font-semibold">Clinic Information</h2>
              <p className="mt-2 text-sm text-slate">
                Prefer to speak to someone? Our front desk is happy to help you choose the right
                appointment.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <span className="text-navy/85">
                    123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <a href="tel:+911234567890" className="text-navy/85 hover:text-primary-dark">
                    +91 12345 67890
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <a href="mailto:info@example.com" className="text-navy/85 hover:text-primary-dark">
                    info@example.com
                  </a>
                </li>
              </ul>

              <h3 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase">
                <Clock className="size-4 text-primary" /> Opening Hours
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Mon – Sat (Morning)", "10:30 AM – 2:00 PM"],
                  ["Mon – Sat (Evening)", "5:00 PM – 8:30 PM"],
                  ["Sunday", "Emergency only"],
                ].map(([d, t]) => (
                  <div key={d} className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-slate">{d}</dt>
                    <dd className="font-semibold text-navy">{t}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-7 rounded-2xl border border-border bg-soft-mint/70 p-4 text-xs leading-relaxed text-navy/80">
                Dental emergency? Call our 24/7 helpline and we will arrange a priority slot the
                same day.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
      <ProcessSection />
      <ComfortSection />
      <PricingTransparency />
      <FaqSection />
    </>
  );
}
