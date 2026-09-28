import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { t as ComfortSection } from "./ComfortSection-BW5k7-hO.mjs";
import { t as ProcessSection } from "./ProcessSection-CcHYLLS6.mjs";
import { c as services } from "./router-CEUnSkjT.mjs";
import { n as PricingTransparency, t as FaqSection } from "./FaqSection-DA-2GdW-.mjs";
import { t as SpecialtiesSection } from "./SpecialtiesSection-ByO38XoY.mjs";
import { t as ServiceCard } from "./ServiceCard-i7Heu-Fd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-DOQ4jU15.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Our Treatments",
			title: "Advanced Dental Treatments for Every Smile",
			description: "Explore our complete range of dental services designed to protect your oral health, restore function and create a smile you feel confident sharing."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					service: s,
					index: i
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtiesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingTransparency, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComfortSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
//#endregion
export { ServicesPage as component };
