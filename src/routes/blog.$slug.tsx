import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { blogs } from "@/data/blogs";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogs.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | CARE 32" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.post.title} | CARE 32 Blog`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogDetails,
});

function BlogDetails() {
  const { post } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== post.slug);

  return (
    <>
      <section className="gradient-hero pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-primary-dark">
            {post.category}
          </span>
          <h1 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-primary" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="size-3.5 text-primary" /> {post.author}
            </span>
          </div>
        </div>
      </section>

      <article className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <div className="shadow-card overflow-hidden rounded-[2rem] border border-border">
              <img
                src={post.image}
                alt={post.title}
                width={1280}
                height={800}
                className="aspect-16/9 w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="mt-10 space-y-5">
            {post.content.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="leading-relaxed text-navy/85">{p}</p>
              </Reveal>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark"
          >
            <ArrowLeft className="size-4" /> Back to all articles
          </Link>
        </div>
      </article>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Continue reading</h2>
          <p className="mt-2 text-sm text-slate">
            More practical dental guidance written by our clinical team.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: b.slug }}
                  className="shadow-soft flex h-full gap-4 rounded-3xl border border-border bg-card p-4 transition-shadow hover:shadow-card"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="size-24 shrink-0 rounded-2xl object-cover"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-navy">{b.title}</span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-slate">
                      {b.excerpt}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
