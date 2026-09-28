import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
import { M as Headphones, c as Syringe, j as HeartPulse, o as Timer } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ComfortSection-BW5k7-hO.js
var import_jsx_runtime = require_jsx_runtime();
var comfort_patient_default = "/assets/comfort-patient-ChwmZuYo.jpg";
var items = [
	{
		icon: Syringe,
		title: "Virtually Painless Anaesthesia",
		text: "We apply a topical numbing gel first, then deliver anaesthetic slowly with fine-gauge needles and computer-assisted flow control. Most patients tell us they never felt the injection at all."
	},
	{
		icon: HeartPulse,
		title: "Dental Anxiety Support",
		text: "If dentistry makes you nervous, say so — it changes how we work. Longer appointments, agreed stop signals, step-by-step narration and optional sedation put you back in control of the chair."
	},
	{
		icon: Headphones,
		title: "A Calmer Environment",
		text: "Soft lighting, noise-cancelling headphones, weighted blankets and warm towels are available on request. Small details matter when you are lying in a dental chair for an hour."
	},
	{
		icon: Timer,
		title: "Respect for Your Time",
		text: "We schedule generously so appointments start on time and never feel rushed. Where clinically sensible, we combine procedures so you make fewer trips to the clinic."
	}
];
function ComfortSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-soft-mint/50 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-mint/40 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Comfort First",
					title: "Dentistry That Respects How You Feel",
					description: "Fear of the dentist is common and completely valid. Our clinical protocols are built around lowering that anxiety — not just treating the tooth in front of us."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -6 },
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 22
							},
							className: "h-full rounded-3xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-sm hover:shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-primary flex size-11 items-center justify-center rounded-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "size-5 text-primary-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-semibold text-navy",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-slate",
									children: it.text
								})
							]
						})
					}, it.title))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shadow-card overflow-hidden rounded-[3rem] border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: comfort_patient_default,
								alt: "Relaxed patient wearing headphones in a modern dental chair",
								loading: "lazy",
								width: 1200,
								height: 1400,
								className: "h-[24rem] w-full object-cover sm:h-[32rem]"
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
							className: "glass absolute -bottom-6 -left-2 rounded-3xl px-5 py-4 shadow-soft sm:left-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold text-gradient",
								children: "96%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate",
								children: "Report a pain-free visit"
							})]
						})]
					})
				})]
			})
		})]
	});
}
//#endregion
export { ComfortSection as t };
