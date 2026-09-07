import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CalendarClock, Star } from "lucide-react";
import type { Doctor } from "@/data/doctors";

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-soft-blue">
        <img
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.specialty} at CARE 32`}
          loading="lazy"
          width={800}
          height={1000}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="glass absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-navy">
          <Star className="size-3.5 fill-primary text-primary" /> {doctor.rating.toFixed(1)}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-sm font-medium text-primary-dark">{doctor.specialty}</p>
        <p className="mt-2 text-xs text-slate">{doctor.qualification}</p>
        <p className="mt-3 inline-flex items-center gap-2 text-xs text-slate">
          <CalendarClock className="size-3.5 text-primary" />
          {doctor.availability}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            to="/doctors/$slug"
            params={{ slug: doctor.slug }}
            className="rounded-full border border-primary bg-card px-4 py-2 text-xs font-semibold text-primary-dark transition-colors hover:bg-soft-blue"
          >
            View Profile
          </Link>
          <Link
            to="/appointment"
            search={{ doctor: doctor.slug }}
            className="gradient-primary rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
