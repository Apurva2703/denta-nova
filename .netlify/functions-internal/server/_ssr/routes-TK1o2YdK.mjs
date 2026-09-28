import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useSpring, r as useTransform } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as smile_default } from "./smile-BB0ShvBX.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
import { t as HygieneSection } from "./HygieneSection-CVVzbX62.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MoveHorizontal, K as Award, U as Brain, d as Star, f as Sparkles, h as ShieldCheck, n as Waves, q as ArrowRight, v as ScanLine, y as Radiation } from "../_libs/lucide-react.mjs";
import { i as WhyChooseUs, n as StatsSection, r as Testimonials, t as AboutSection } from "./Testimonials-CXm0kry0.mjs";
import { t as PhilosophySection } from "./PhilosophySection-C5cSwLDZ.mjs";
import { t as ComfortSection } from "./ComfortSection-BW5k7-hO.mjs";
import { t as ProcessSection } from "./ProcessSection-CcHYLLS6.mjs";
import { c as services } from "./router-CEUnSkjT.mjs";
import { n as PricingTransparency, t as FaqSection } from "./FaqSection-DA-2GdW-.mjs";
import { t as OralHealthGuide } from "./OralHealthGuide-y-oz2YY9.mjs";
import { t as SpecialtiesSection } from "./SpecialtiesSection-ByO38XoY.mjs";
import { t as ServiceCard } from "./ServiceCard-i7Heu-Fd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-TK1o2YdK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_dentist_default = "/assets/hero-dentist-Bc95l4FQ.png";
function Hero() {
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sx = useSpring(mx, {
		stiffness: 60,
		damping: 18
	});
	const sy = useSpring(my, {
		stiffness: 60,
		damping: 18
	});
	const docX = useTransform(sx, [-.5, .5], [-14, 14]);
	const docY = useTransform(sy, [-.5, .5], [-10, 10]);
	const cardX = useTransform(sx, [-.5, .5], [28, -28]);
	const cardY = useTransform(sy, [-.5, .5], [20, -20]);
	function onMove(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gradient-hero relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24",
		onMouseMove: onMove,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-cyan-soft/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -left-20 size-[24rem] rounded-full bg-mint/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.16em] text-primary-dark uppercase shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " Advanced Dental Care"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .08
						},
						className: "mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl",
						children: ["Your Smile Deserves ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Exceptional Care"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .16
						},
						className: "mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg",
						children: "Experience advanced dentistry designed around your comfort, confidence and long-term oral health, delivered by experienced dental professionals using modern technology."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .24
						},
						className: "mt-9 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/appointment",
							className: "gradient-primary shadow-glow group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: ["Book an Appointment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "group inline-flex items-center gap-2 rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue",
							children: ["Explore Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .4 },
						className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), " Sterilised & safe environment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-primary" }), " Award-winning clinical team"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative [perspective:1400px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								x: docX,
								y: docY
							},
							initial: {
								opacity: 0,
								scale: .94
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: .8,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "relative mx-auto max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-6 top-10 bottom-0 rounded-[3rem] bg-gradient-to-b from-soft-blue to-white shadow-card" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-12 bottom-2 h-10 rounded-full bg-navy/10 blur-2xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_dentist_default,
									alt: "Experienced CARE 32 dentist in a white coat smiling",
									width: 1024,
									height: 1280,
									className: "relative z-10 w-full drop-shadow-[0_30px_40px_rgba(18,48,71,0.18)]"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: {
								x: cardX,
								y: cardY
							},
							className: "glass shadow-card absolute top-16 -left-2 z-20 rounded-2xl px-4 py-3 sm:left-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-xl bg-soft-mint",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 fill-primary text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-lg leading-none font-bold text-navy",
									children: "4.9/5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate",
									children: "2,400+ reviews"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								x: cardY,
								y: cardX
							},
							className: "glass shadow-card absolute right-0 bottom-24 z-20 rounded-2xl px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-lg leading-none font-bold text-navy",
								children: "15+ Years"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate",
								children: "Clinical experience"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { y: [
								0,
								-16,
								0
							] },
							transition: {
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "glass shadow-card absolute top-4 right-4 z-20 flex items-center gap-2 rounded-2xl px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								className: "size-6",
								fill: "none",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z",
									fill: "var(--primary)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-navy",
								children: "Painless Treatment"
							})]
						})
					]
				})]
			})
		]
	});
}
var items = [
	{
		icon: Radiation,
		title: "Digital X-Ray",
		text: "Up to 80% less radiation with instant, enhanced images."
	},
	{
		icon: ScanLine,
		title: "3D Dental Scanning",
		text: "Impression-free scans captured in under five minutes."
	},
	{
		icon: Brain,
		title: "AI-Assisted Diagnostics",
		text: "Early detection support for decay and bone changes."
	},
	{
		icon: Waves,
		title: "Advanced Imaging",
		text: "CBCT planning for precise, predictable surgery."
	}
];
function TechnologySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gradient-tech relative overflow-hidden py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-10 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-cyan-soft/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Technology",
				title: "Technology That Makes Dentistry Better",
				description: "Modern technology allows us to diagnose accurately, plan treatments intelligently and provide a more comfortable experience for every patient."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-5",
						children: items.slice(0, 2).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCard, {
							...it,
							delay: i * .1
						}, it.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex size-64 items-center justify-center sm:size-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-cyan-soft/50 to-white blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow absolute inset-4 rounded-full border border-dashed border-primary/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow absolute inset-12 rounded-full border border-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: {
									y: [
										0,
										-14,
										0
									],
									rotateY: [
										0,
										18,
										0,
										-18,
										0
									]
								},
								transition: {
									duration: 10,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "glass shadow-glow relative flex size-40 items-center justify-center rounded-[2.5rem] sm:size-48",
								style: { transformStyle: "preserve-3d" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "size-24 sm:size-28",
									fill: "none",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "toothGrad",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#8DDEEA"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#1689A5"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z",
										fill: "url(#toothGrad)"
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-5",
						children: items.slice(2).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCard, {
							...it,
							delay: i * .1 + .15
						}, it.title))
					})
				]
			})]
		})]
	});
}
function TechCard({ icon: Icon, title, text, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 22
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
			duration: .6,
			delay
		},
		whileHover: { y: -6 },
		className: "glass shadow-soft flex items-start gap-4 rounded-2xl p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-soft-blue text-primary-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-semibold text-navy",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-sm text-slate",
			children: text
		})] })]
	});
}
var cases = [
	{
		label: "Teeth Whitening",
		note: "Six shades brighter in one session"
	},
	{
		label: "Smile Design",
		note: "Eight porcelain veneers, natural finish"
	},
	{
		label: "Dental Implants",
		note: "Two implants with matched crowns"
	},
	{
		label: "Cosmetic Bonding",
		note: "Chip repair and edge reshaping"
	}
];
function Slider({ label, note }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const setFromClientX = (clientX) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		setPos(Math.min(100, Math.max(0, (clientX - rect.left) / rect.width * 100)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shadow-soft overflow-hidden rounded-3xl border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "relative aspect-4/3 cursor-ew-resize touch-none select-none",
			onPointerDown: (e) => {
				e.currentTarget.setPointerCapture(e.pointerId);
				setFromClientX(e.clientX);
			},
			onPointerMove: (e) => {
				if (e.buttons === 1) setFromClientX(e.clientX);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: smile_default,
					alt: `${label} result after treatment`,
					loading: "lazy",
					width: 1200,
					height: 900,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: smile_default,
						alt: `${label} before treatment`,
						loading: "lazy",
						width: 1200,
						height: 900,
						className: "size-full object-cover brightness-[0.86] saturate-[0.6] sepia-[0.35]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-navy",
					children: "Before"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "glass absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-navy",
					children: "After"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 w-0.5 bg-white",
					style: { left: `${pos}%` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shadow-glow absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveHorizontal, { className: "size-5" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value: pos,
					"aria-label": `${label} before and after comparison`,
					onChange: (e) => setPos(Number(e.target.value)),
					className: "absolute inset-x-0 bottom-3 mx-auto w-3/4 accent-[var(--primary)] opacity-0 focus-visible:opacity-100"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-semibold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate",
				children: note
			})]
		})]
	});
}
function BeforeAfter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-soft-blue/60 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Transformations",
				title: "Real Smiles. Real Transformations.",
				description: "See how personalized dental treatments can transform smiles while maintaining a natural and confident appearance."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2",
				children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, { ...c })
				}, c.label))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-soft-mint/50 py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our Services",
						title: "Complete Dental Care Under One Roof",
						description: "From preventive care to complete smile transformations, our dental team provides personalized treatments using modern techniques and advanced technology."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							service: s,
							index: i
						}, s.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "group inline-flex items-center gap-2 rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue",
								children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtiesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnologySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComfortSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HygieneSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingTransparency, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OralHealthGuide, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-primary shadow-glow relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center sm:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-16 -right-10 size-64 rounded-full bg-white/15 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl",
							children: "A Brighter Smile. A Better You."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base",
							children: "Book a consultation today and receive a personalized treatment plan with clear timelines, transparent pricing and no obligation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/appointment",
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-transform hover:-translate-y-0.5",
							children: ["Book an Appointment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}) })
			})
		})
	] });
}
//#endregion
export { Home as component };
