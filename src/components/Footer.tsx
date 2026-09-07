import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/data/services";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/doctors", label: "Our Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Dental Blog" },
  { to: "/appointment", label: "Book Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">
            A modern dental studio combining experienced clinicians, advanced technology and a
            genuinely comfortable patient experience.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Dental Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Contact & Hours
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className="block font-semibold text-white">CARE 32 Dental Care Center</span>
                123 Sample Street, Demo Plaza, First Floor,
                City Center, Pune 411001
                <a href="tel:+911234567890" className="mt-1 block text-white hover:text-primary">
                  +91 12345 67890
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="mailto:info@example.com" className="break-all hover:text-primary">
                info@example.com
              </a>
            </li>
          </ul>
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt>Mon – Sat (Morning)</dt>
              <dd className="text-white">10:30 AM – 2:00 PM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Mon – Sat (Evening)</dt>
              <dd className="text-white">5:00 PM – 8:30 PM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sunday</dt>
              <dd className="text-white">Emergency only</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs sm:px-6 lg:px-8">
          © 2026 CARE 32 Dental Care Center. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
