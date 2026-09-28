import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as smile_default, t as clinic_interior_default } from "./smile-BB0ShvBX.mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Instagram, B as CalendarPlus, D as MapPin, E as Menu, O as Mail, P as Facebook, S as Phone, T as MessageCircle, a as Twitter, k as Linkedin, t as X } from "../_libs/lucide-react.mjs";
import { t as doctor_avinash_default } from "./doctor-avinash-D-qOi16P.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as technology_default } from "./technology-BPLKPwbC.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DBtHLw-v.js
var services = [
	{
		slug: "general-dentistry",
		title: "General Dentistry",
		icon: "ShieldCheck",
		short: "Routine check-ups, cleanings and preventive care that keep problems small.",
		description: "Comprehensive examinations, professional cleaning, fillings and preventive guidance designed to protect your natural teeth for life.",
		highlights: [
			"Digital examination",
			"Scaling & polishing",
			"Cavity fillings",
			"Preventive plan"
		],
		duration: "30–45 min",
		price: "From $60"
	},
	{
		slug: "cosmetic-dentistry",
		title: "Cosmetic Dentistry",
		icon: "Sparkles",
		short: "Veneers, bonding and smile design tailored to your facial harmony.",
		description: "Natural-looking cosmetic treatments planned digitally so you can preview your new smile before treatment begins.",
		highlights: [
			"Digital smile design",
			"Porcelain veneers",
			"Composite bonding",
			"Gum contouring"
		],
		duration: "60–90 min",
		price: "From $250"
	},
	{
		slug: "dental-implants",
		title: "Dental Implants",
		icon: "Anchor",
		short: "Permanent tooth replacement with guided, minimally invasive surgery.",
		description: "Titanium implants placed with 3D-guided precision to restore chewing comfort, facial structure and confidence.",
		highlights: [
			"3D CBCT planning",
			"Guided placement",
			"Same-day temporaries",
			"Lifetime care plan"
		],
		duration: "90 min",
		price: "From $900"
	},
	{
		slug: "teeth-whitening",
		title: "Teeth Whitening",
		icon: "Sun",
		short: "Safe, enamel-friendly whitening with visible results in one visit.",
		description: "Clinically supervised whitening that lifts stains gently while protecting enamel and minimising sensitivity.",
		highlights: [
			"In-clinic LED whitening",
			"Custom home kits",
			"Sensitivity control",
			"Shade tracking"
		],
		duration: "60 min",
		price: "From $180"
	},
	{
		slug: "orthodontics",
		title: "Orthodontics",
		icon: "AlignHorizontalDistributeCenter",
		short: "Clear aligners and modern braces for comfortable teeth straightening.",
		description: "Digitally planned alignment using clear aligners or discreet braces with predictable, monitored progress.",
		highlights: [
			"Clear aligners",
			"Ceramic braces",
			"3D treatment preview",
			"Retention plan"
		],
		duration: "45 min",
		price: "From $1,400"
	},
	{
		slug: "root-canal-treatment",
		title: "Root Canal Treatment",
		icon: "Activity",
		short: "Pain-free endodontic care that saves badly damaged natural teeth.",
		description: "Rotary endodontics with magnification and effective anaesthesia to remove infection while preserving your tooth.",
		highlights: [
			"Single-visit option",
			"Rotary endodontics",
			"Microscope assisted",
			"Crown protection"
		],
		duration: "60–90 min",
		price: "From $220"
	},
	{
		slug: "pediatric-dentistry",
		title: "Pediatric Dentistry",
		icon: "Baby",
		short: "Gentle, friendly dental care that helps children feel safe.",
		description: "Child-focused prevention, sealants and habit guidance delivered in a calm, reassuring environment.",
		highlights: [
			"Fluoride & sealants",
			"Behaviour-friendly care",
			"Parent coaching",
			"Growth monitoring"
		],
		duration: "30 min",
		price: "From $50"
	},
	{
		slug: "emergency-dental-care",
		title: "Emergency Dental Care",
		icon: "Siren",
		short: "Same-day relief for pain, swelling, trauma and broken restorations.",
		description: "Rapid triage and treatment for urgent dental problems, with priority appointments available every day.",
		highlights: [
			"Same-day slots",
			"Pain management",
			"Trauma repair",
			"24/7 helpline"
		],
		duration: "Priority",
		price: "From $80"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/doctors-BYRaLg5V.js
var doctors = [{
	slug: "dr-avinash-yele",
	name: "Dr. Avinash Yele",
	specialty: "Dental Surgeon & Implantologist",
	qualification: "B.D.S., M.D.S. (Dental Surgeon & Implantologist)",
	experience: "14+ years",
	rating: 4.9,
	availability: "Mon – Sat, 10:30 AM – 2:00 PM & 5:00 PM – 8:30 PM",
	image: doctor_avinash_default,
	bio: "Dr. Avinash Yele leads the surgical, restorative and cosmetic care at CARE 32 Dental Care Center. Known for a gentle chairside manner, he explains every treatment option clearly before starting and is trusted by anxious patients for calm, precise care.",
	treatments: [
		"Dental Implants",
		"Root Canal Treatment",
		"Smile Design",
		"Crowns & Bridges",
		"Full-mouth Rehabilitation",
		"Kids Dentistry"
	],
	hours: [
		{
			day: "Mon – Sat (Morning)",
			time: "10:30 AM – 2:00 PM"
		},
		{
			day: "Mon – Sat (Evening)",
			time: "5:00 PM – 8:30 PM"
		},
		{
			day: "Sunday",
			time: "Emergency only"
		}
	],
	reviews: [
		{
			name: "Rupali J.",
			text: "Very gentle and explains everything clearly. My root canal was completely painless.",
			rating: 5
		},
		{
			name: "Sagar P.",
			text: "Two implants placed with zero discomfort. Excellent follow-up care.",
			rating: 5
		},
		{
			name: "Neha D.",
			text: "Straightforward pricing and a very skilled hand. Highly recommended.",
			rating: 5
		}
	]
}];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/blogs-Cp9O-4Jq.js
var blogs = [
	{
		slug: "daily-habits-for-healthy-teeth",
		title: "Five Daily Habits That Protect Your Teeth for Life",
		category: "Prevention",
		excerpt: "Small, consistent routines matter far more than occasional intensive care. Here are the habits our dentists recommend to every patient.",
		date: "12 July 2026",
		author: "Dr. Avinash Yele",
		image: smile_default,
		content: [
			"Most dental problems we treat begin quietly, long before pain appears. Consistent daily care is the single most effective way to avoid complex treatment later.",
			"Brush twice daily for two full minutes with a fluoride toothpaste, using gentle circular motions rather than pressure. A soft-bristled or electric brush protects the gum margin.",
			"Clean between the teeth once a day. Floss or interdental brushes reach the 40% of tooth surface a brush cannot, which is exactly where most cavities begin.",
			"Limit the frequency of sugary snacks rather than only the amount. Each sugar exposure creates an acid attack lasting around 20 minutes.",
			"Finally, keep your six-month check-ups. Early detection turns a filling into a five-minute appointment instead of a root canal."
		]
	},
	{
		slug: "what-to-expect-dental-implant",
		title: "What to Expect During a Dental Implant Treatment",
		category: "Treatments",
		excerpt: "A clear, step-by-step look at implant treatment, from the first 3D scan to your final crown and long-term maintenance.",
		date: "28 June 2026",
		author: "Dr. Avinash Yele",
		image: clinic_interior_default,
		content: [
			"Implant treatment begins with a 3D CBCT scan that shows bone volume, nerve position and the ideal implant angle. Nothing is left to guesswork.",
			"On surgery day, the area is fully numbed and the implant is placed through a guided surgical stent. Most single implants take under an hour.",
			"Healing takes eight to twelve weeks while the implant integrates with bone. A temporary tooth keeps your appearance and function intact during this period.",
			"Once integration is confirmed, a custom crown is designed digitally and matched to the shade and shape of your natural teeth.",
			"With good hygiene and regular reviews, modern implants routinely last well over twenty years."
		]
	},
	{
		slug: "technology-changing-dentistry",
		title: "How Digital Technology Is Changing Modern Dentistry",
		category: "Technology",
		excerpt: "Digital scanning, low-dose imaging and AI-assisted diagnostics make treatment faster, more accurate and far more comfortable.",
		date: "09 June 2026",
		author: "Dr. Avinash Yele",
		image: technology_default,
		content: [
			"Impression trays and guesswork are being replaced by intraoral scanners that capture your teeth in high resolution within minutes.",
			"Digital radiography reduces radiation exposure significantly compared with traditional film, while giving the dentist an instantly enhanced image.",
			"AI-assisted diagnostics act as a second pair of eyes, highlighting early decay and bone changes that can be easy to overlook.",
			"For patients, the practical benefits are fewer appointments, more predictable results and treatment plans you can actually see and understand."
		]
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CEUnSkjT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BOwFfWM8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function Logo({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex min-w-0 items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gradient-primary shadow-glow flex size-10 shrink-0 items-center justify-center rounded-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-5.5",
				"aria-hidden": "true",
				fill: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z",
					fill: "white"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `block font-display text-base font-bold tracking-wide ${light ? "text-white" : "text-navy"}`,
				children: "CARE 32"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `block truncate text-[0.6rem] font-medium tracking-[0.16em] uppercase ${light ? "text-white/70" : "text-slate"}`,
				children: "Multispeciality Dental Care"
			})]
		})]
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/doctors",
		label: "Doctors"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft border-b" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main navigation",
			className: "mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "group relative text-sm font-medium text-navy/80 transition-colors hover:text-primary-dark",
						activeProps: { className: "text-primary-dark" },
						activeOptions: { exact: l.to === "/" },
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" })]
					}) }, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/appointment",
						className: "gradient-primary shadow-glow hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex",
						children: "Book Appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-navy lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .3,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "glass overflow-hidden border-t lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6",
				children: [links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						x: -12
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .04 * i },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-soft-blue",
						activeProps: { className: "bg-soft-blue text-primary-dark" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					})
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/appointment",
					onClick: () => setOpen(false),
					className: "gradient-primary mt-2 block rounded-xl px-4 py-3 text-center text-base font-semibold text-primary-foreground",
					children: "Book Appointment"
				}) })]
			})
		}) })]
	});
}
var quickLinks = [
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/doctors",
		label: "Our Doctors"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/blog",
		label: "Dental Blog"
	},
	{
		to: "/appointment",
		label: "Book Appointment"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-navy text-white/75",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed",
						children: "A modern dental studio combining experienced clinicians, advanced technology and a genuinely comfortable patient experience."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-3",
						children: [
							Facebook,
							Instagram,
							Twitter,
							Linkedin
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social media",
							className: "flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-primary hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-[0.18em] text-white uppercase",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: quickLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-primary",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-[0.18em] text-white uppercase",
					children: "Dental Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: services.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "transition-colors hover:text-primary",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold tracking-[0.18em] text-white uppercase",
						children: "Contact & Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-white",
										children: "CARE 32 Dental Care Center"
									}),
									"123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+911234567890",
										className: "mt-1 block text-white hover:text-primary",
										children: "+91 12345 67890"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@example.com",
								className: "break-all hover:text-primary",
								children: "info@example.com"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Mon – Sat (Morning)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-white",
									children: "10:30 AM – 2:00 PM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Mon – Sat (Evening)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-white",
									children: "5:00 PM – 8:30 PM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sunday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-white",
									children: "Emergency only"
								})]
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-4 py-6 text-center text-xs sm:px-6 lg:px-8",
				children: "© 2026 CARE 32 Dental Care Center. All Rights Reserved."
			})
		})]
	});
}
var base = "group relative flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:size-13";
function FloatingButtons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-5 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/911234567890",
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: `${base} bg-primary-dark`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative size-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100",
						children: "WhatsApp"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "tel:+911234567890",
				"aria-label": "Call the clinic",
				className: `${base} bg-primary`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100",
					children: "Call Now"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/appointment",
				"aria-label": "Book an appointment",
				className: `${base} gradient-primary`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute right-full mr-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy opacity-0 shadow-soft transition-opacity group-hover:opacity-100",
					children: "Book Visit"
				})]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CARE 32 Dental Care Center | A Brighter Smile. A Better You." },
			{
				name: "description",
				content: "Premium dental care in Pune: implants, cosmetic dentistry, orthodontics and emergency treatment with advanced technology."
			},
			{
				name: "author",
				content: "CARE 32 Dental Care Center"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-TK1o2YdK.mjs");
var title$7 = "CARE 32 Dental Care Center | Premium Dental Care & Smile Design";
var description$7 = "Advanced, comfortable dentistry in Pune. Implants, cosmetic dentistry, orthodontics and emergency care from experienced dentists at CARE 32 Dental Care Center.";
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$7 },
		{
			name: "description",
			content: description$7
		},
		{
			property: "og:title",
			content: title$7
		},
		{
			property: "og:description",
			content: description$7
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-D3fwCrgd.mjs");
var title$6 = "About CARE 32 Dental Care Center | Our Story & Philosophy";
var description$6 = "Meet the team behind CARE 32 Dental Care Center: experienced clinicians, advanced dental technology and a patient-first approach to comfortable care.";
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./appointment-BZbXlK5g.mjs");
var title$5 = "Book a Dental Appointment | CARE 32 Dental Care Center";
var description$5 = "Request an appointment at CARE 32 Dental Care Center. Choose your treatment, preferred doctor and time — our care team confirms within a few hours.";
var searchSchema = objectType({ doctor: stringType().optional() });
var Route$8 = createFileRoute("/appointment")({
	validateSearch: searchSchema,
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: description$5
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: description$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-C1L-gF4V.mjs");
var title$4 = "Contact CARE 32 Dental Care Center | Pune Dental Clinic";
var description$4 = "Get in touch with CARE 32 Dental Care Center in City Center, Pune. Address, phone, email, opening hours and a direct enquiry form.";
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gallery-Bz0P4R04.mjs");
var title$3 = "Gallery | Inside CARE 32 Dental Care Center";
var description$3 = "Photos of the CARE 32 clinic, our dental technology, the team and real smile transformations from our patients.";
var Route$6 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./blog.index-BfH80bkN.mjs");
var title$2 = "Dental Care Insights | CARE 32 Blog";
var description$2 = "Expert-backed dental advice from the CARE 32 team: prevention habits, treatment guides and how modern dental technology helps patients.";
var Route$5 = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blog._slug-BFFpAhpX.mjs");
var Route$4 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = blogs.find((b) => b.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article unavailable | CARE 32" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.post.title} | CARE 32 Blog`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: loaderData.post.excerpt
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: loaderData.post.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./doctors.index-CfFFVtQ8.mjs");
var title$1 = "Meet Our Dentists | CARE 32 Dental Care Center";
var description$1 = "Experienced dental surgeons, orthodontists, implantologists and pediatric dentists at CARE 32. View profiles, availability and book directly.";
var Route$3 = createFileRoute("/doctors/")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./doctors._slug-CtgPhi-r.mjs");
var Route$2 = createFileRoute("/doctors/$slug")({
	loader: ({ params }) => {
		const doctor = doctors.find((d) => d.slug === params.slug);
		if (!doctor) throw notFound();
		return { doctor };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Doctor unavailable | CARE 32" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { doctor } = loaderData;
		const title = `${doctor.name} — ${doctor.specialty} | CARE 32`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: doctor.bio.slice(0, 155)
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: doctor.bio.slice(0, 155)
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.index-DOQ4jU15.mjs");
var title = "Dental Services | Implants, Cosmetic & Orthodontics — CARE 32";
var description = "Explore CARE 32's complete range of dental treatments: general dentistry, implants, whitening, orthodontics, root canals, pediatric and emergency care.";
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services._slug-DZQdjLEN.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = services.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service unavailable | CARE 32" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.service.title} | CARE 32 Dental Care Center`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: loaderData.service.description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: loaderData.service.description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var AppointmentRoute = Route$8.update({
	id: "/appointment",
	path: "/appointment",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var BlogIndexRoute = Route$5.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$11
});
var BlogSlugRoute = Route$4.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$11
});
var DoctorsIndexRoute = Route$3.update({
	id: "/doctors/",
	path: "/doctors/",
	getParentRoute: () => Route$11
});
var DoctorsSlugRoute = Route$2.update({
	id: "/doctors/$slug",
	path: "/doctors/$slug",
	getParentRoute: () => Route$11
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AppointmentRoute,
	ContactRoute,
	GalleryRoute,
	BlogSlugRoute,
	DoctorsSlugRoute,
	ServicesSlugRoute: Route.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$11
	}),
	BlogIndexRoute,
	DoctorsIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$8 as a, services as c, Route$4 as i, Route as n, blogs as o, Route$2 as r, doctors as s, router_exports as t };
