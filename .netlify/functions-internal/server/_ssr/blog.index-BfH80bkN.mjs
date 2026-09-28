import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as CalendarDays, q as ArrowRight, r as UserRound } from "../_libs/lucide-react.mjs";
import { o as blogs } from "./router-CEUnSkjT.mjs";
import { t as OralHealthGuide } from "./OralHealthGuide-y-oz2YY9.mjs";
import { t as EmergencySection } from "./EmergencySection-CDOxCpvC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-BfH80bkN.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Blog",
			title: "Dental Care Insights",
			description: "Simple, practical and expert-backed advice to help you maintain a healthy smile and make informed dental care decisions."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8",
				children: blogs.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group shadow-soft flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-16/10 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.image,
								alt: b.title,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-fit rounded-full bg-soft-blue px-3 py-1 text-xs font-semibold text-primary-dark",
									children: b.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-lg leading-snug font-semibold",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-sm leading-relaxed text-slate",
									children: b.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary" }),
											" ",
											b.date
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-3.5 text-primary" }),
											" ",
											b.author
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/blog/$slug",
									params: { slug: b.slug },
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark",
									children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1.5" })]
								})
							]
						})]
					})
				}, b.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OralHealthGuide, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencySection, {})
	] });
}
//#endregion
export { BlogPage as component };
