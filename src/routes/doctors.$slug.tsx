import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarClock, GraduationCap, Star, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { doctors } from "@/data/doctors";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Doctor unavailable | CARE 32" }, { name: "robots", content: "noindex" }],
      };
    }
    const { doctor } = loaderData;
    const title = `${doctor.name} — ${doctor.specialty} | CARE 32`;
    return {
      meta: [
        { title },
        { name: "description", content: doctor.bio.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: doctor.bio.slice(0, 155) },
      ],
    };
  },
  component: DoctorDetails,
});

function DoctorDetails() {
  const { doctor } = Route.useLoaderData();

  return (
    <>
      <section className="gradient-hero pt-32 pb-16 sm:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div className="shadow-card overflow-hidden rounded-[2.5rem] border border-border bg-card">
              <img
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.specialty}`}
                width={800}
                height={1000}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase">
              {doctor.specialty}
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">{doctor.name}</h1>
            <p className="mt-4 leading-relaxed text-slate">{doctor.bio}</p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <Stat icon={GraduationCap} label="Qualification" value={doctor.qualification} />
              <Stat icon={Stethoscope} label="Experience" value={doctor.experience} />
              <Stat icon={Star} label="Patient rating" value={`${doctor.rating.toFixed(1)} / 5`} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                search={{ doctor: doctor.slug }}
                className="gradient-primary shadow-glow rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Book with {doctor.name.split(" ")[1]}
              </Link>
              <Link
                to="/doctors"
                className="rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark"
              >
                All doctors
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Reveal className="lg:col-span-2">
            <div className="shadow-soft h-full rounded-3xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold">Treatments performed</h2>
              <p className="mt-2 text-sm text-slate">
                Areas of focus where {doctor.name} regularly treats patients at CARE 32.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {doctor.treatments.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-soft-blue px-4 py-2 text-sm font-medium text-navy"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-semibold">Patient reviews</h2>
              <div className="mt-5 space-y-4">
                {doctor.reviews.map((r) => (
                  <blockquote
                    key={r.name}
                    className="rounded-2xl border border-border bg-soft-mint/60 p-5"
                  >
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, k) => (
                        <Star key={k} className="size-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-navy/85">{r.text}</p>
                    <footer className="mt-2 text-xs font-semibold text-slate">— {r.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass shadow-card h-full rounded-3xl p-8">
              <h2 className="text-lg font-semibold">Working hours</h2>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate">
                <CalendarClock className="size-4 text-primary" />
                {doctor.availability}
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                {doctor.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-slate">{h.day}</dt>
                    <dd className="font-semibold text-navy">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/appointment"
                search={{ doctor: doctor.slug }}
                className="gradient-primary mt-7 block rounded-full px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Request an appointment
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Star;
  label: string;
  value: string;
}) {
  return (
    <div className="shadow-soft rounded-2xl border border-border bg-card p-4">
      <dt className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate uppercase">
        <Icon className="size-4 text-primary" />
        {label}
      </dt>
      <dd className="mt-2 text-sm font-semibold text-navy">{value}</dd>
    </div>
  );
}
