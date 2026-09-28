import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-hr3gipI_.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "center", as: Tag = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full border border-border bg-soft-blue px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-dark uppercase",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: "mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-slate",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
