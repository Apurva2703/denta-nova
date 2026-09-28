import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
import { G as Baby, W as Braces, _ as Scissors, c as Syringe, f as Sparkles, u as Stethoscope } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SpecialtiesSection-ByO38XoY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var specialties_default = "/assets/specialties-B-x4t42c.jpg";
var specialties = [
	{
		icon: Scissors,
		title: "Oral & Maxillofacial Surgery",
		text: "Complex extractions, impacted wisdom teeth, bone grafting and surgical implant placement handled in-house under strict sterile protocol, with sedation available."
	},
	{
		icon: Braces,
		title: "Orthodontics",
		text: "Clear aligners, ceramic and self-ligating braces planned with 3D simulation so you can see the projected movement of every tooth before treatment starts."
	},
	{
		icon: Syringe,
		title: "Implantology",
		text: "Guided implant surgery using CBCT-planned surgical stents for precise positioning, shorter healing and crowns that match your natural teeth in shade and contour."
	},
	{
		icon: Baby,
		title: "Pediatric Dentistry",
		text: "Child-friendly visits built around trust, not force. Preventive sealants, fluoride application and habit counselling delivered by a dentist trained specifically for young patients."
	},
	{
		icon: Stethoscope,
		title: "Endodontics",
		text: "Microscope-assisted root canal therapy with rotary instrumentation — usually completed in a single visit and far more comfortable than its reputation suggests."
	},
	{
		icon: Sparkles,
		title: "Periodontics",
		text: "Deep cleaning, laser-assisted gum therapy and regenerative procedures to stabilise the foundation that holds your teeth in place."
	}
];
function SpecialtiesSection() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-soft-mint/50 py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-mint/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Specialities",
					title: "A Full Specialist Team Under One Roof",
					description: "Instead of referring you across the city, our clinicians cover every major dental discipline in the same building — so complex cases are planned together in one conversation."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:sticky lg:top-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shadow-card relative overflow-hidden rounded-[2.5rem] border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: specialties_default,
								alt: "Specialist dental operatory at CARE 32 Dental Care Center",
								loading: "lazy",
								width: 1200,
								height: 1500,
								className: "h-[26rem] w-full object-cover lg:h-[34rem]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-4 rounded-3xl border border-border/60 bg-card/85 p-5 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase",
									children: "Currently viewing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 8
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { duration: .35 },
									className: "mt-1 text-lg font-semibold text-navy",
									children: specialties[active]?.title
								}, active)]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: specialties.map((s, i) => {
							const isActive = i === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
									type: "button",
									onMouseEnter: () => setActive(i),
									onFocus: () => setActive(i),
									onClick: () => setActive(i),
									whileHover: { x: 6 },
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 24
									},
									className: `flex w-full gap-4 rounded-3xl border p-5 text-left transition-colors ${isActive ? "shadow-card border-primary/40 bg-card" : "border-border bg-card/60 hover:bg-card"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${isActive ? "gradient-primary" : "bg-soft-blue"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: `size-6 ${isActive ? "text-primary-foreground" : "text-primary"}` })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-base font-semibold text-navy",
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											initial: false,
											animate: { opacity: isActive ? 1 : .75 },
											className: "mt-1.5 block text-sm leading-relaxed text-slate",
											children: s.text
										})]
									})]
								})
							}, s.title);
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { SpecialtiesSection as t };
