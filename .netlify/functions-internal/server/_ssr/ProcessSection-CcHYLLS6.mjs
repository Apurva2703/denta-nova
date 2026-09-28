import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessSection-CcHYLLS6.js
var import_jsx_runtime = require_jsx_runtime();
var consultation_default = "/assets/consultation-BTnaHL7f.jpg";
var steps = [
	{
		n: "01",
		title: "Consultation & Listening",
		text: "Every journey begins with a conversation. We ask about your concerns, dental history, sensitivity, past experiences and the outcome you imagine — before we ever pick up an instrument."
	},
	{
		n: "02",
		title: "Digital Diagnosis",
		text: "Low-radiation digital X-rays, intraoral scanning and clinical photography give us a complete picture of your teeth, gums and bite so nothing is left to guesswork."
	},
	{
		n: "03",
		title: "Personalized Plan",
		text: "You receive a written plan with staged treatment options, realistic timelines and transparent pricing. We explain the trade-offs of each route so the decision is genuinely yours."
	},
	{
		n: "04",
		title: "Comfortable Treatment",
		text: "Numbing gels, gentle anaesthesia delivery, noise-cancelling headphones and unhurried appointments keep treatment calm and predictable from start to finish."
	},
	{
		n: "05",
		title: "Aftercare & Review",
		text: "We follow up after every major procedure, adjust where needed and set a preventive schedule that protects the results you have invested in."
	}
];
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-1/3 -left-32 size-80 rounded-full bg-cyan-soft/25 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Process",
				title: "How Your Treatment Journey Unfolds",
				description: "A clear, five-stage pathway designed to remove uncertainty. You always know what happens next, why it matters and what it costs before treatment begins."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 bottom-2 left-[1.65rem] w-px bg-gradient-to-b from-primary via-cyan-soft to-transparent" }), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { x: 6 },
							transition: {
								type: "spring",
								stiffness: 280,
								damping: 22
							},
							className: "relative flex gap-6 pb-9 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-primary shadow-glow relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-navy",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-xl text-sm leading-relaxed text-slate",
									children: s.text
								})]
							})]
						})
					}, s.n))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "lg:sticky lg:top-28 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shadow-card overflow-hidden rounded-[2.5rem] border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: consultation_default,
								alt: "Dentist explaining a personalised treatment plan to a patient",
								loading: "lazy",
								width: 1200,
								height: 900,
								className: "h-80 w-full object-cover sm:h-[26rem]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { y: [
								0,
								-12,
								0
							] },
							transition: {
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "glass absolute -bottom-6 -left-4 rounded-3xl px-5 py-4 shadow-soft sm:left-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold text-gradient",
								children: "45 min"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate",
								children: "Average first consultation"
							})]
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { consultation_default as n, ProcessSection as t };
