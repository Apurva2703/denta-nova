import { Link } from "@tanstack/react-router";
import { CalendarPlus, MessageCircle, Phone } from "lucide-react";

const base =
  "group relative flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:size-13";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-8">
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${base} bg-primary-dark`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/25" />
        <MessageCircle className="relative size-5" />
        <span className="pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a href="tel:+911234567890" aria-label="Call the clinic" className={`${base} bg-primary`}>
        <Phone className="size-5" />
        <span className="pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
          Call Now
        </span>
      </a>
      <Link
        to="/appointment"
        aria-label="Book an appointment"
        className={`${base} gradient-primary`}
      >
        <CalendarPlus className="size-5" />
        <span className="pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
          Book Visit
        </span>
      </Link>
    </div>
  );
}
