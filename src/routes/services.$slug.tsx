import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Clock, Tag } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | CARE 32" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} | CARE 32 Dental Care Center`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.service.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.service.description },
      ],
    };
  },
  component: ServiceDetails,
});

function ServiceDetails() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Treatment" title={service.title} description={service.description} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <Reveal>
            <div className="shadow-soft rounded-3xl border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">What this treatment includes</h2>
              <p className="mt-3 leading-relaxed text-slate">
                Every {service.title.toLowerCase()} plan starts with a full assessment so the
                treatment matches your clinical needs, comfort level and long-term goals.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-soft-blue/50 px-4 py-3 text-sm text-navy/85"
                  >
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass shadow-card rounded-3xl p-8">
              <h2 className="text-lg font-semibold">Treatment at a glance</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="size-4 text-primary" />
                  <dt className="text-slate">Appointment time</dt>
                  <dd className="ml-auto font-semibold text-navy">{service.duration}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="size-4 text-primary" />
                  <dt className="text-slate">Indicative price</dt>
                  <dd className="ml-auto font-semibold text-navy">{service.price}</dd>
                </div>
              </dl>
              <Link
                to="/appointment"
                className="gradient-primary shadow-glow mt-7 block rounded-full px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Book this treatment
              </Link>
              <Link
                to="/services"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary-dark"
              >
                <ArrowLeft className="size-4" /> All services
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Related treatments</h2>
          <p className="mt-2 text-sm text-slate">
            Patients considering {service.title.toLowerCase()} often explore these options too.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
