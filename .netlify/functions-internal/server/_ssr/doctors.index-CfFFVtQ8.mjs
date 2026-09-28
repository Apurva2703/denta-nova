import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as CalendarClock, d as Star } from "../_libs/lucide-react.mjs";
import { t as PhilosophySection } from "./PhilosophySection-C5cSwLDZ.mjs";
import { t as ComfortSection } from "./ComfortSection-BW5k7-hO.mjs";
import { s as doctors } from "./router-CEUnSkjT.mjs";
import { t as SpecialtiesSection } from "./SpecialtiesSection-ByO38XoY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctors.index-CfFFVtQ8.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorCard({ doctor, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
			delay: index % 4 * .08
		},
		whileHover: { y: -8 },
		className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-4/5 overflow-hidden bg-soft-blue",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: doctor.image,
				alt: `${doctor.name}, ${doctor.specialty} at CARE 32`,
				loading: "lazy",
				width: 800,
				height: 1e3,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "glass absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-navy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-primary text-primary" }),
					" ",
					doctor.rating.toFixed(1)
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: doctor.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary-dark",
					children: doctor.specialty
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-slate",
					children: doctor.qualification
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 inline-flex items-center gap-2 text-xs text-slate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-3.5 text-primary" }), doctor.availability]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/doctors/$slug",
						params: { slug: doctor.slug },
						className: "rounded-full border border-primary bg-card px-4 py-2 text-xs font-semibold text-primary-dark transition-colors hover:bg-soft-blue",
						children: "View Profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/appointment",
						search: { doctor: doctor.slug },
						className: "gradient-primary rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground",
						children: "Book Appointment"
					})]
				})
			]
		})]
	});
}
function DoctorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Our Team",
			title: "Meet Our Dental Experts",
			description: "Our experienced dental professionals combine clinical expertise, advanced technology and a gentle approach to help every patient achieve a healthier, more confident smile."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl justify-center gap-6 px-4 sm:px-6 lg:px-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),22rem))]",
				children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorCard, {
					doctor: d,
					index: i
				}, d.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtiesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComfortSection, {})
	] });
}
//#endregion
export { DoctorsPage as component };
