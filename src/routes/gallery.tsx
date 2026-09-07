import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { HygieneSection } from "@/components/HygieneSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import clinic from "@/assets/clinic-interior.jpg";
import tech from "@/assets/technology.jpg";
import smile from "@/assets/smile.jpg";
import d1 from "@/assets/doctor-1.jpg";
import d3 from "@/assets/doctor-3.jpg";
import dAvinash from "@/assets/doctor-avinash.jpg";

const title = "Gallery | Inside CARE 32 Dental Care Center";
const description =
  "Photos of the CARE 32 clinic, our dental technology, the team and real smile transformations from our patients.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Clinic", "Doctors", "Treatments", "Technology", "Smiles"] as const;

const items = [
  { src: clinic, cat: "Clinic", alt: "Modern treatment room at CARE 32" },
  { src: tech, cat: "Technology", alt: "Digital dental imaging suite" },
  { src: smile, cat: "Smiles", alt: "Bright healthy smile after whitening" },
  { src: dAvinash, cat: "Doctors", alt: "Dr. Avinash Yele, Dental Surgeon & Implantologist" },
  { src: d1, cat: "Doctors", alt: "Dr. Avinash Yele at the CARE 32 clinic" },
  { src: d3, cat: "Doctors", alt: "Dr. Avinash Yele reviewing a treatment plan" },
  { src: clinic, cat: "Treatments", alt: "Treatment area prepared for a procedure" },
  { src: tech, cat: "Treatments", alt: "Digital scan review during treatment planning" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const visible = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside CARE 32 Dental Care Center"
        description="Take a look at our modern clinic, advanced technology, experienced team and real smile transformations."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === c
                    ? "gradient-primary border-transparent text-primary-foreground"
                    : "border-border bg-card text-navy hover:bg-soft-blue"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.button
                  key={`${item.alt}-${i}`}
                  layout
                  type="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActive(i)}
                  className="group shadow-soft relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="glass absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-navy">
                    {item.cat}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <HygieneSection />
      <SpecialtiesSection />
      <AnimatePresence>
        {active !== null && visible[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-60 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={visible[active].src}
              alt={visible[active].alt}
              className="max-h-[85vh] w-auto rounded-3xl object-contain shadow-card"
            />
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 flex size-11 items-center justify-center rounded-full bg-card text-navy"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
