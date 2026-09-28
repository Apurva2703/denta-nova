import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-CWub4ygU.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gradient-hero relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-20 right-0 size-96 rounded-full bg-cyan-soft/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-mint/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-4 text-center sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase shadow-soft",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 22
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .08
						},
						className: "mt-5 text-3xl leading-tight font-semibold text-balance sm:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 22
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .16
						},
						className: "mt-4 text-base leading-relaxed text-slate",
						children: description
					})
				]
			})
		]
	});
}
//#endregion
export { PageHeader as t };
