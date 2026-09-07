import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i] ?? testimonials[0]!;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Thousands of patients trust CARE 32 for professional dental care, comfortable treatments and a better overall experience."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="shadow-card rounded-3xl border border-border bg-card p-8 sm:p-10"
            >
              <Quote className="size-8 text-primary/40" />
              <p className="mt-4 text-lg leading-relaxed text-navy/90">{t.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <span className="gradient-primary flex size-12 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="text-sm text-slate">{t.treatment}</span>
                </span>
                <span className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-primary text-primary" />
                  ))}
                </span>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="shadow-soft flex size-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-soft-blue"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, k) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-7 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="shadow-soft flex size-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-soft-blue"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
