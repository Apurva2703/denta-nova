import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as smile_default, t as clinic_interior_default } from "./smile-BB0ShvBX.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PhilosophySection-C5cSwLDZ.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Conservative by default",
		text: "We remove as little natural tooth structure as possible. Nothing man-made outperforms healthy enamel, so preservation always comes before replacement in our treatment planning."
	},
	{
		title: "Evidence over trends",
		text: "Techniques and materials enter our clinic only after long-term data supports them. Our clinicians publish, teach and attend continuing education every year to keep that standard."
	},
	{
		title: "Whole-person dentistry",
		text: "Grinding, sleep quality, diet, medication and stress all show up in the mouth. We look at the causes behind the damage instead of repeatedly repairing the symptoms."
	},
	{
		title: "Informed consent, genuinely",
		text: "You will never be asked to approve a plan you do not understand. We use scans, photos and plain language until the reasoning is completely clear to you."
	}
];
function PhilosophySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-md lg:max-w-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { y: [
									0,
									-10,
									0
								] },
								transition: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "shadow-card overflow-hidden rounded-[2.5rem] border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: clinic_interior_default,
									alt: "Interior of CARE 32 Dental Care Center",
									loading: "lazy",
									width: 1280,
									height: 960,
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
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "shadow-glow absolute -right-2 -bottom-12 w-44 overflow-hidden rounded-3xl border-4 border-background sm:w-56",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: smile_default,
									alt: "Close-up of a healthy natural smile",
									loading: "lazy",
									width: 800,
									height: 800,
									className: "h-36 w-full object-cover sm:h-44"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass absolute -top-6 -left-3 rounded-2xl px-4 py-3 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-bold text-gradient",
									children: "18+ yrs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.7rem] text-slate",
									children: "Of conservative practice"
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						eyebrow: "Our Philosophy",
						title: "The Principles Behind Every Decision We Make",
						description: "CARE 32 was founded on a simple frustration: dentistry too often felt transactional. We built a studio where clinical excellence and genuine care are not treated as separate things."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 divide-y divide-border border-y border-border",
						children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
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
			})
		})
	});
}
//#endregion
export { PhilosophySection as t };
