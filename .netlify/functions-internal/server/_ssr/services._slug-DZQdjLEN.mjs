import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Clock, I as CircleCheck, J as ArrowLeft, s as Tag } from "../_libs/lucide-react.mjs";
import { c as services, n as Route } from "./router-CEUnSkjT.mjs";
import { t as ServiceCard } from "./ServiceCard-i7Heu-Fd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DZQdjLEN.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetails() {
	const { service } = Route.useLoaderData();
	const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Treatment",
			title: service.title,
			description: service.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shadow-soft rounded-3xl border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: "What this treatment includes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 leading-relaxed text-slate",
							children: [
								"Every ",
								service.title.toLowerCase(),
								" plan starts with a full assessment so the treatment matches your clinical needs, comfort level and long-term goals."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 grid gap-3 sm:grid-cols-2",
							children: service.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-2xl border border-border bg-soft-blue/50 px-4 py-3 text-sm text-navy/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4.5 shrink-0 text-primary" }), h]
							}, h))
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "glass shadow-card rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Treatment at a glance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 space-y-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-slate",
											children: "Appointment time"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "ml-auto font-semibold text-navy",
											children: service.duration
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-4 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-slate",
											children: "Indicative price"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "ml-auto font-semibold text-navy",
											children: service.price
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/appointment",
								className: "gradient-primary shadow-glow mt-7 block rounded-full px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground",
								children: "Book this treatment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All services"]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20 sm:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Related treatments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-slate",
						children: [
							"Patients considering ",
							service.title.toLowerCase(),
							" often explore these options too."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: related.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							service: s,
							index: i
						}, s.slug))
					})
				]
			})
		})
	] });
}
//#endregion
export { ServiceDetails as component };
