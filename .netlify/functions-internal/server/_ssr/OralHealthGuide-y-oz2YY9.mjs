import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/OralHealthGuide-y-oz2YY9.js
var import_jsx_runtime = require_jsx_runtime();
var oral_care_default = "/assets/oral-care-Cn6-exxC.jpg";
var habits = [
	{
		title: "Brush for two minutes, twice daily",
		text: "Use a soft-bristled or electric brush at a 45-degree angle to the gumline. Pressure damages enamel and gums far more than it cleans — let the bristles do the work, not your arm."
	},
	{
		title: "Clean between the teeth every day",
		text: "A brush reaches roughly 60% of tooth surfaces. Floss or interdental brushes handle the remaining 40%, which is exactly where most cavities and gum disease begin."
	},
	{
		title: "Do not rinse after brushing",
		text: "Spit out the excess toothpaste but skip the water. Leaving a thin fluoride film on the enamel overnight measurably reduces decay risk."
	},
	{
		title: "Watch frequency, not just quantity, of sugar",
		text: "Six small sugary snacks across a day cause more damage than one dessert. Each exposure restarts a 20-minute acid attack on your enamel."
	},
	{
		title: "Treat bleeding gums as a warning",
		text: "Healthy gums do not bleed when brushed. Bleeding is early inflammation and is almost always reversible if addressed within weeks rather than years."
	},
	{
		title: "Keep six-monthly check-ups",
		text: "Cavities and gum disease are painless in their earliest and cheapest stages. Routine visits catch them before they need root canals or extractions."
	}
];
function OralHealthGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-soft-blue/60 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shadow-card overflow-hidden rounded-[3rem] border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: oral_care_default,
							alt: "Woman brushing her teeth as part of a daily oral care routine",
							loading: "lazy",
							width: 1200,
							height: 900,
							className: "h-80 w-full object-cover sm:h-[26rem]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						className: "glass absolute -right-2 -bottom-6 rounded-3xl px-5 py-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-bold text-gradient",
							children: "8 in 10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate",
							children: "Treatments are preventable"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Everyday Care",
					title: "The Habits That Prevent Most Dental Work",
					description: "Around eight out of ten treatments we perform could have been avoided with better daily routines. These are the evidence-based basics our hygienists repeat most often."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: habits.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { x: 6 },
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 24
							},
							className: "group flex gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-border hover:bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-bold text-primary-dark shadow-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-navy",
								children: h.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-slate",
								children: h.text
							})] })]
						})
					}, h.title))
				})] })]
			})
		})
	});
}
//#endregion
export { OralHealthGuide as t };
