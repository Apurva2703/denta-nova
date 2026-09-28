import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { n as smile_default, t as clinic_interior_default } from "./smile-BB0ShvBX.mjs";
import { n as doctor_1_default, t as HygieneSection } from "./HygieneSection-CVVzbX62.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { t as doctor_avinash_default } from "./doctor-avinash-D-qOi16P.mjs";
import { t as technology_default } from "./technology-BPLKPwbC.mjs";
import { t as SpecialtiesSection } from "./SpecialtiesSection-ByO38XoY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Bz0P4R04.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var doctor_3_default = "/assets/doctor-3-DaAQHlwi.jpg";
var categories = [
	"All",
	"Clinic",
	"Doctors",
	"Treatments",
	"Technology",
	"Smiles"
];
var items = [
	{
		src: clinic_interior_default,
		cat: "Clinic",
		alt: "Modern treatment room at CARE 32"
	},
	{
		src: technology_default,
		cat: "Technology",
		alt: "Digital dental imaging suite"
	},
	{
		src: smile_default,
		cat: "Smiles",
		alt: "Bright healthy smile after whitening"
	},
	{
		src: doctor_avinash_default,
		cat: "Doctors",
		alt: "Dr. Avinash Yele, Dental Surgeon & Implantologist"
	},
	{
		src: doctor_1_default,
		cat: "Doctors",
		alt: "Dr. Avinash Yele at the CARE 32 clinic"
	},
	{
		src: doctor_3_default,
		cat: "Doctors",
		alt: "Dr. Avinash Yele reviewing a treatment plan"
	},
	{
		src: clinic_interior_default,
		cat: "Treatments",
		alt: "Treatment area prepared for a procedure"
	},
	{
		src: technology_default,
		cat: "Treatments",
		alt: "Digital scan review during treatment planning"
	}
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const visible = items.filter((i) => filter === "All" || i.cat === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Gallery",
			title: "Inside CARE 32 Dental Care Center",
			description: "Take a look at our modern clinic, advanced technology, experienced team and real smile transformations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2.5",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(c),
						className: `rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${filter === c ? "gradient-primary border-transparent text-primary-foreground" : "border-border bg-card text-navy hover:bg-soft-blue"}`,
						children: c
					}, c))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: visible.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							layout: true,
							type: "button",
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .95
							},
							transition: { duration: .35 },
							whileHover: { y: -6 },
							onClick: () => setActive(i),
							className: "group shadow-soft relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "glass absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-navy",
								children: item.cat
							})]
						}, `${item.alt}-${i}`))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HygieneSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtiesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && visible[active] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setActive(null),
			className: "fixed inset-0 z-60 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
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
				src: visible[active].src,
				alt: visible[active].alt,
				className: "max-h-[85vh] w-auto rounded-3xl object-contain shadow-card"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close image",
				onClick: () => setActive(null),
				className: "absolute top-6 right-6 flex size-11 items-center justify-center rounded-full bg-card text-navy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})]
		}) })
	] });
}
//#endregion
export { GalleryPage as component };
