import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
import { x as Plus, z as Check } from "../_libs/lucide-react.mjs";
import { n as consultation_default } from "./ProcessSection-CcHYLLS6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FaqSection-DA-2GdW-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var blocks = [
	{
		title: "Written estimates, always",
		text: "Before any treatment starts you receive an itemised estimate covering consultation, materials, lab work and review visits. If the clinical picture changes mid-treatment, we pause and re-quote rather than surprise you afterwards."
	},
	{
		title: "Options at three levels",
		text: "Most problems have a conservative, a standard and a premium solution. We present all three with their honest lifespan, aesthetics and cost, so you can choose what fits your budget rather than being sold the most expensive route."
	},
	{
		title: "Insurance & claims help",
		text: "Our front desk pre-verifies coverage with major insurers, submits documentation on your behalf and tells you the expected out-of-pocket figure before your appointment date."
	},
	{
		title: "Flexible payment plans",
		text: "Larger treatments such as implants, full-mouth rehabilitation and orthodontics can be split into interest-free monthly instalments across the treatment period."
	}
];
function PricingTransparency() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-soft-blue/60 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Pricing & Payments",
					title: "No Hidden Costs, No Pressure Selling",
					description: "Dental anxiety is often financial as much as clinical. We remove that uncertainty with clear numbers, honest alternatives and payment structures that fit real budgets."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-4",
					children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -4 },
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 22
							},
							className: "flex gap-4 rounded-3xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-sm hover:shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-primary flex size-9 shrink-0 items-center justify-center rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-navy",
								children: b.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-slate",
								children: b.text
							})] })]
						})
					}, b.title))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shadow-card overflow-hidden rounded-[2.5rem] border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: consultation_default,
								alt: "Front desk team reviewing a written treatment estimate with a patient",
								loading: "lazy",
								width: 1200,
								height: 900,
								className: "h-80 w-full object-cover sm:h-[28rem]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { y: [
								0,
								-10,
								0
							] },
							transition: {
								duration: 6.5,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "glass absolute -bottom-6 left-6 rounded-3xl px-5 py-4 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold text-gradient",
								children: "0% EMI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate",
								children: "Interest-free instalments"
							})]
						})]
					})
				})]
			})
		})]
	});
}
var faqs = [
	{
		q: "How often should I visit the dentist?",
		a: "For most patients a check-up and professional cleaning every six months is ideal. If you have gum disease, implants or orthodontic treatment, we may recommend visits every three to four months."
	},
	{
		q: "Is teeth whitening safe for enamel?",
		a: "Yes. Professionally supervised whitening uses controlled concentrations and protective barriers, so enamel is not damaged. Any short-term sensitivity is managed with desensitising treatment."
	},
	{
		q: "Are dental implants painful?",
		a: "Implant placement is performed under effective local anaesthesia and most patients report less discomfort than a routine extraction. Mild soreness for two to three days is normal and easily managed."
	},
	{
		q: "How long does a root canal take?",
		a: "Most root canals are completed in a single appointment of 60 to 90 minutes. Complex or infected cases may need a second short visit before the final crown is placed."
	},
	{
		q: "Do you offer emergency dental care?",
		a: "Yes. We keep priority slots open every day for pain, swelling, dental trauma and broken restorations, and our helpline is available 24/7 for urgent guidance."
	},
	{
		q: "Do you treat anxious patients?",
		a: "Absolutely. We use a step-by-step consent approach, longer appointment times and comfort options so nervous patients stay fully in control throughout treatment."
	}
];
function FaqSection() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-tech py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "Frequently Asked Questions",
				description: "Find quick answers to some of the most common questions about dental treatments, appointments and oral health."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-12 max-w-3xl space-y-3",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shadow-soft overflow-hidden rounded-2xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": isOpen,
							onClick: () => setOpen(isOpen ? null : i),
							className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold text-navy",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: `size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .28,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-6 pb-5 text-sm leading-relaxed text-slate",
									children: f.a
								})
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
//#endregion
export { PricingTransparency as n, FaqSection as t };
