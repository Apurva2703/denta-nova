import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clinic_interior_default } from "./smile-BB0ShvBX.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HygieneSection-CVVzbX62.js
var import_jsx_runtime = require_jsx_runtime();
var doctor_1_default = "/assets/doctor-1-0TXc-XFV.jpg";
var hygiene_default = "/assets/hygiene-DE2ZDKCr.jpg";
var protocols = [
	{
		title: "Single-use where it counts",
		text: "Needles, blades, suction tips, gloves, bibs and polishing cups are opened in front of you and discarded after a single patient. Nothing disposable is ever reused."
	},
	{
		title: "Class B autoclave sterilisation",
		text: "Reusable instruments are ultrasonically cleaned, pouched, then sterilised in a vacuum autoclave with every cycle logged and periodically spore-tested for verification."
	},
	{
		title: "Surface & air control",
		text: "Every operatory is wiped down with hospital-grade disinfectant between patients, and HEPA filtration with high-volume evacuation reduces aerosol in the room."
	},
	{
		title: "Water line management",
		text: "Dental unit waterlines are flushed and treated on a fixed schedule so the water touching your mouth meets drinking-water standards."
	}
];
function HygieneSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-cyan-soft/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "order-2 lg:order-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shadow-card overflow-hidden rounded-[3rem] border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hygiene_default,
								alt: "Sterilised dental instruments in a sealed pouch held by a clinician",
								loading: "lazy",
								width: 1200,
								height: 900,
								className: "h-72 w-full object-cover sm:h-96"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { y: [
								0,
								12,
								0
							] },
							transition: {
								duration: 7.5,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "shadow-glow absolute -right-2 -bottom-10 w-40 overflow-hidden rounded-3xl border-4 border-background sm:w-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: clinic_interior_default,
								alt: "Operatory prepared for the next patient at CARE 32",
								loading: "lazy",
								width: 1280,
								height: 960,
								className: "h-32 w-full object-cover sm:h-40"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass absolute -top-5 -left-3 rounded-2xl px-4 py-3 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold text-gradient",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] text-slate",
								children: "Cycles logged & verified"
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 lg:order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Safety & Hygiene",
					title: "Sterilisation You Can Actually Verify",
					description: "Infection control is the least visible part of dentistry and the part we take most seriously. Here is exactly what happens between one patient leaving the chair and you sitting in it."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: protocols.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { x: 6 },
							className: "group flex gap-5 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-bold text-primary/50 transition-colors group-hover:text-primary",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-navy",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-slate",
								children: p.text
							})] })]
						})
					}, p.title))
				})]
			})]
		})]
	});
}
//#endregion
export { doctor_1_default as n, HygieneSection as t };
