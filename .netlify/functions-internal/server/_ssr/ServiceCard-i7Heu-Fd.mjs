import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Baby, X as AlignHorizontalDistributeCenter, Y as Anchor, Z as Activity, f as Sparkles, h as ShieldCheck, l as Sun, p as Siren, q as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-i7Heu-Fd.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	ShieldCheck,
	Sparkles,
	Anchor,
	Sun,
	AlignHorizontalDistributeCenter,
	Activity,
	Baby,
	Siren
};
function ServiceCard({ service, index = 0 }) {
	const Icon = icons[service.icon] ?? Sparkles;
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
			delay: index % 4 * .07
		},
		whileHover: {
			y: -8,
			rotateX: 3,
			rotateY: -3
		},
		className: "group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card [transform-style:preserve-3d]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-soft-blue/0 to-soft-mint/0 opacity-0 transition-opacity duration-300 group-hover:from-soft-blue/70 group-hover:to-soft-mint/60 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-14 items-center justify-center rounded-2xl bg-soft-blue text-primary-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-semibold",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-sm leading-relaxed text-slate",
						children: service.short
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/services/$slug",
				params: { slug: service.slug },
				className: "relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark",
				children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1.5" })]
			})
		]
	});
}
//#endregion
export { ServiceCard as t };
