import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clinic_interior_default } from "./smile-BB0ShvBX.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
import { n as doctor_1_default } from "./HygieneSection-CVVzbX62.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as CircleCheck, L as ChevronRight, R as ChevronLeft, b as Quote, d as Star, i as UserRoundCheck, j as HeartPulse, m as ShieldPlus, p as Siren, q as ArrowRight, u as Stethoscope, w as Microscope } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-CXm0kry0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var points = [
	"Experienced professionals across every dental specialty",
	"Modern equipment for accurate diagnosis and planning",
	"Personalized treatment plans with transparent pricing",
	"Strict hygiene and sterilisation protocols"
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shadow-card overflow-hidden rounded-[2.5rem] border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: clinic_interior_default,
						alt: "Bright modern treatment room at CARE 32 Dental Care Center",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass shadow-card absolute -bottom-8 left-4 flex w-64 items-center gap-3 rounded-2xl p-4 sm:left-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: doctor_1_default,
						alt: "Dr. Avinash Yele, Chief Dental Surgeon",
						loading: "lazy",
						width: 800,
						height: 1e3,
						className: "size-14 rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-semibold text-navy",
						children: "Dr. Avinash Yele"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-slate",
						children: "Chief Dental Surgeon"
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 lg:mt-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full border border-border bg-soft-mint px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase",
							children: "About CARE 32"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl",
							children: "Where Technology Meets Compassionate Care"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-slate",
							children: "We combine experienced dental professionals, advanced equipment and a patient-first approach to make every dental visit comfortable, transparent and personalized."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3.5",
						children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-navy/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-primary" }), p]
							})
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group mt-9 inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue",
							children: ["More About Our Studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})
					})
				]
			})]
		})
	});
}
var reasons = [
	{
		icon: Stethoscope,
		title: "Experienced Dentists",
		text: "Specialists across surgery, orthodontics, prosthodontics and pediatric care."
	},
	{
		icon: Microscope,
		title: "Advanced Technology",
		text: "Digital scanning, low-dose imaging and guided treatment planning."
	},
	{
		icon: HeartPulse,
		title: "Pain-Free Approach",
		text: "Gentle techniques and effective anaesthesia for calm, comfortable visits."
	},
	{
		icon: UserRoundCheck,
		title: "Personalized Treatment",
		text: "Plans built around your goals, budget and clinical priorities."
	},
	{
		icon: ShieldPlus,
		title: "Hygienic Environment",
		text: "Hospital-grade sterilisation and single-use instruments as standard."
	},
	{
		icon: Siren,
		title: "Emergency Support",
		text: "Same-day priority slots and a 24/7 helpline for urgent problems."
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why CARE 32",
				title: "Why Patients Choose CARE 32",
				description: "From your first consultation to your final treatment, every part of your experience is designed around safety, comfort, technology and exceptional care."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 26
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .55,
						delay: i % 3 * .08
					},
					whileHover: {
						y: -8,
						rotateX: 3,
						rotateY: -3
					},
					className: "shadow-soft h-full rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card [transform-style:preserve-3d]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-13 items-center justify-center rounded-2xl bg-soft-mint text-primary-dark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-slate",
							children: r.text
						})
					]
				}, r.title))
			})]
		})
	});
}
var stats = [
	{
		value: 15,
		suffix: "+",
		label: "Years of Experience"
	},
	{
		value: 10,
		suffix: "K+",
		label: "Happy Patients"
	},
	{
		value: 25,
		suffix: "K+",
		label: "Successful Treatments"
	},
	{
		value: 4.9,
		suffix: "/5",
		label: "Patient Rating"
	}
];
function Counter({ value, suffix, active }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		let frame = 0;
		const total = 60;
		const id = setInterval(() => {
			frame += 1;
			const progress = 1 - Math.pow(1 - frame / total, 3);
			setN(value * progress);
			if (frame >= total) clearInterval(id);
		}, 16);
		return () => clearInterval(id);
	}, [active, value]);
	const display = Number.isInteger(value) ? Math.round(n) : n.toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-gradient font-display text-4xl font-bold sm:text-5xl",
		children: [display, suffix]
	});
}
function StatsSection() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Track Record",
				title: "Dental Care Backed by Proven Results",
				description: "Trusted by thousands of patients for comfortable, advanced and personalized dental care."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shadow-soft h-full rounded-3xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: s.value,
							suffix: s.suffix,
							active: inView
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium text-slate",
							children: s.label
						})]
					})
				}, s.label))
			})]
		})
	});
}
var testimonials = [
	{
		name: "Rhea Kapoor",
		treatment: "Dental Implants",
		rating: 5,
		initials: "RK",
		text: "From the first consultation to the final fitting, everything was explained calmly and clearly. The clinic feels more like a premium studio than a dental office."
	},
	{
		name: "Daniel Ortiz",
		treatment: "Teeth Whitening",
		rating: 5,
		initials: "DO",
		text: "Three shades brighter in a single visit with no sensitivity at all. The team took time to check comfort throughout the appointment."
	},
	{
		name: "Meera Sundaram",
		treatment: "Clear Aligners",
		rating: 5,
		initials: "MS",
		text: "I could see a 3D preview of my result before I even started. Ten months later my smile matches that preview almost exactly."
	},
	{
		name: "Tom Whitfield",
		treatment: "Root Canal Treatment",
		rating: 5,
		initials: "TW",
		text: "I was genuinely nervous, and it turned out to be completely painless. Finished in one visit and back at work the same afternoon."
	},
	{
		name: "Anita Rao",
		treatment: "Smile Design",
		rating: 5,
		initials: "AR",
		text: "The result looks natural, not artificial. That was exactly what I asked for and the team listened carefully."
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const t = testimonials[i] ?? testimonials[0];
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Patient Stories",
				title: "What Our Patients Say",
				description: "Thousands of patients trust CARE 32 for professional dental care, comfortable treatments and a better overall experience."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-12 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -20
						},
						transition: { duration: .45 },
						className: "shadow-card rounded-3xl border border-border bg-card p-8 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-8 text-primary/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg leading-relaxed text-navy/90",
								children: t.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-primary flex size-12 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground",
										children: t.initials
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-navy",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-slate",
										children: t.treatment
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto flex gap-0.5",
										children: Array.from({ length: t.rating }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }, k))
									})
								]
							})
						]
					}, t.name)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous testimonial",
							onClick: () => setI((v) => (v - 1 + testimonials.length) % testimonials.length),
							className: "shadow-soft flex size-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-soft-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: testimonials.map((item, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Show testimonial ${k + 1}`,
								onClick: () => setI(k),
								className: `h-2 rounded-full transition-all ${k === i ? "w-7 bg-primary" : "w-2 bg-border"}`
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next testimonial",
							onClick: () => setI((v) => (v + 1) % testimonials.length),
							className: "shadow-soft flex size-11 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-soft-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { WhyChooseUs as i, StatsSection as n, Testimonials as r, AboutSection as t };
