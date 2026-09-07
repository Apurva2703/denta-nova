import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { EmergencySection } from "@/components/EmergencySection";
import { ProcessSection } from "@/components/ProcessSection";

const title = "Contact CARE 32 Dental Care Center | Pune Dental Clinic";
const description =
  "Get in touch with CARE 32 Dental Care Center in City Center, Pune. Address, phone, email, opening hours and a direct enquiry form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy outline-none placeholder:text-slate/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

const details = [
  {
    icon: MapPin,
    label: "Our Clinic",
    value: "123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001",
  },
  { icon: Phone, label: "Call us", value: "+91 12345 67890" },
  { icon: Mail, label: "Email us", value: "info@example.com" },
  {
    icon: Clock,
    label: "Opening hours",
    value: "Mon–Sat 10:30 AM–2:00 PM & 5:00 PM–8:30 PM · Sun emergency only",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're Here for Your Smile"
        description="Have a question, need guidance or want to schedule a visit? Our team is ready to help you take the next step toward better dental health."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="grid gap-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="shadow-soft flex gap-4 rounded-3xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-soft-blue text-primary-dark">
                    <d.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-slate uppercase">
                      {d.label}
                    </span>
                    <span className="mt-1 block text-sm break-words text-navy/85">{d.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="shadow-card flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-soft-mint">
                  <Send className="size-7 text-primary-dark" />
                </span>
                <h2 className="mt-6 text-2xl font-semibold">Message sent</h2>
                <p className="mt-3 max-w-sm text-sm text-slate">
                  Thank you for reaching out. Our team will respond within one working day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="shadow-card rounded-3xl border border-border bg-card p-7 sm:p-9"
              >
                <h2 className="text-xl font-semibold">Send us a message</h2>
                <p className="mt-2 text-sm text-slate">
                  Share a few details and the right team member will get back to you.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input required name="name" placeholder="Full name" className={field} />
                  <input required name="email" type="email" placeholder="Email address" className={field} />
                  <input name="phone" placeholder="Phone number" className={field} />
                  <input name="subject" placeholder="Subject" className={field} />
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className={`${field} sm:col-span-2`}
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-primary shadow-glow mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="shadow-soft relative flex h-72 items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-soft-blue to-soft-mint sm:h-96">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="glass shadow-card relative rounded-3xl px-8 py-6 text-center">
                <MapPin className="mx-auto size-7 text-primary" />
                <p className="mt-3 font-semibold text-navy">CARE 32 Dental Care Center</p>
                <p className="mt-1 text-sm text-slate">
                  123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001
                </p>
                <a
                  href="https://maps.google.com/?q=Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-primary bg-card px-5 py-2.5 text-xs font-semibold text-primary-dark"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <EmergencySection />
      <ProcessSection />
    </>
  );
}
