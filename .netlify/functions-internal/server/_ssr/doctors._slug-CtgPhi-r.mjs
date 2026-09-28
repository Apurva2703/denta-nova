import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as CalendarClock, N as GraduationCap, d as Star, u as Stethoscope } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-CEUnSkjT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctors._slug-CtgPhi-r.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorDetails() {
	const { doctor } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero pt-32 pb-16 sm:pt-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shadow-card overflow-hidden rounded-[2.5rem] border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: doctor.image,
					alt: `${doctor.name}, ${doctor.specialty}`,
					width: 800,
					height: 1e3,
					className: "aspect-4/5 w-full object-cover"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase",
						children: doctor.specialty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl font-semibold sm:text-5xl",
						children: doctor.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-slate",
						children: doctor.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: GraduationCap,
								label: "Qualification",
								value: doctor.qualification
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Stethoscope,
								label: "Experience",
								value: doctor.experience
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Star,
								label: "Patient rating",
								value: `${doctor.rating.toFixed(1)} / 5`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/appointment",
							search: { doctor: doctor.slug },
							className: "gradient-primary shadow-glow rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground",
							children: ["Book with ", doctor.name.split(" ")[1]]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/doctors",
							className: "rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark",
							children: "All doctors"
						})]
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shadow-soft h-full rounded-3xl border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Treatments performed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-slate",
							children: [
								"Areas of focus where ",
								doctor.name,
								" regularly treats patients at CARE 32."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2.5",
							children: doctor.treatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border bg-soft-blue px-4 py-2 text-sm font-medium text-navy",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 text-xl font-semibold",
							children: "Patient reviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4",
							children: doctor.reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-2xl border border-border bg-soft-mint/60 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5",
										children: Array.from({ length: r.rating }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }, k))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-navy/85",
										children: r.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
										className: "mt-2 text-xs font-semibold text-slate",
										children: ["— ", r.name]
									})
								]
							}, r.name))
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "glass shadow-card h-full rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Working hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 inline-flex items-center gap-2 text-xs text-slate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-4 text-primary" }), doctor.availability]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-6 space-y-3 text-sm",
							children: doctor.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4 border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-slate",
									children: h.day
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold text-navy",
									children: h.time
								})]
							}, h.day))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/appointment",
							search: { doctor: doctor.slug },
							className: "gradient-primary mt-7 block rounded-full px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground",
							children: "Request an appointment"
						})
					]
				})
			})]
		})
	})] });
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shadow-soft rounded-2xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: "inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-2 text-sm font-semibold text-navy",
			children: value
		})]
	});
}
//#endregion
export { DoctorDetails as component };
