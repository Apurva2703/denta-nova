import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as ArrowLeft, V as CalendarDays, r as UserRound } from "../_libs/lucide-react.mjs";
import { i as Route$4, o as blogs } from "./router-CEUnSkjT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BFFpAhpX.js
var import_jsx_runtime = require_jsx_runtime();
function BlogDetails() {
	const { post } = Route$4.useLoaderData();
	const related = blogs.filter((b) => b.slug !== post.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "gradient-hero pt-32 pb-12 sm:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-primary-dark",
						children: post.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary" }),
								" ",
								post.date
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-3.5 text-primary" }),
								" ",
								post.author
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "pb-16 sm:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shadow-card overflow-hidden rounded-[2rem] border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							width: 1280,
							height: 800,
							className: "aspect-16/9 w-full object-cover"
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-5",
						children: post.content.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .04,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed text-navy/85",
								children: p
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "mt-10 inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to all articles"]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20 sm:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Continue reading"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-slate",
						children: "More practical dental guidance written by our clinical team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: related.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog/$slug",
								params: { slug: b.slug },
								className: "shadow-soft flex h-full gap-4 rounded-3xl border border-border bg-card p-4 transition-shadow hover:shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.image,
									alt: b.title,
									loading: "lazy",
									className: "size-24 shrink-0 rounded-2xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-navy",
									children: b.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 block text-xs leading-relaxed text-slate",
									children: b.excerpt
								})] })]
							})
						}, b.slug))
					})
				]
			})
		})
	] });
}
//#endregion
export { BlogDetails as component };
