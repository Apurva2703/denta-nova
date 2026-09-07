import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { OralHealthGuide } from "@/components/OralHealthGuide";
import { EmergencySection } from "@/components/EmergencySection";
import { blogs } from "@/data/blogs";


const title = "Dental Care Insights | CARE 32 Blog";
const description =
  "Expert-backed dental advice from the CARE 32 team: prevention habits, treatment guides and how modern dental technology helps patients.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Dental Care Insights"
        description="Simple, practical and expert-backed advice to help you maintain a healthy smile and make informed dental care decisions."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogs.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.08}>
              <article className="group shadow-soft flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-card">
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-soft-blue px-3 py-1 text-xs font-semibold text-primary-dark">
                    {b.category}
                  </span>
                  <h2 className="mt-4 text-lg leading-snug font-semibold">{b.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">{b.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-primary" /> {b.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <UserRound className="size-3.5 text-primary" /> {b.author}
                    </span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: b.slug }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <OralHealthGuide />
      <EmergencySection />
    </>
  );
}
