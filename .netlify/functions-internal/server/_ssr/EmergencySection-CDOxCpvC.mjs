import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { t as SectionHeading } from "./SectionHeading-hr3gipI_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmergencySection-CDOxCpvC.js
var import_jsx_runtime = require_jsx_runtime();
var cases = [
	{
		title: "Knocked-out tooth",
		text: "Hold the tooth by the crown, never the root. Rinse gently with milk or saline, try to reseat it in the socket or store it in milk, and reach us within 60 minutes — that window decides whether the tooth survives."
	},
	{
		title: "Severe toothache",
		text: "Rinse with warm salt water, take your usual painkiller and avoid placing aspirin directly on the gum. Constant throbbing pain usually signals infection and needs same-day assessment."
	},
	{
		title: "Broken or chipped tooth",
		text: "Save any fragments in milk, rinse your mouth and apply a cold compress to reduce swelling. Sharp edges can be smoothed and the tooth rebuilt, often in a single visit."
	},
	{
		title: "Lost crown or filling",
		text: "Keep the restoration if you can find it, avoid chewing on that side and cover the exposed tooth with dental wax. Most crowns can be re-cemented rather than remade."
	},
	{
		title: "Swelling of the face or jaw",
		text: "Facial swelling with fever is urgent. Call immediately — spreading dental infections need prompt drainage and antibiotics, not a wait-and-see approach."
	},
	{
		title: "Bleeding after extraction",
		text: "Bite firmly on clean gauze for 20 minutes without checking in between. If bleeding continues beyond an hour, contact us so we can review the site."
	}
];
function EmergencySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-soft-mint/50 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Emergency Care",
				title: "What To Do Before You Reach Us",
				description: "Dental emergencies rarely happen at convenient hours. These first steps protect the tooth while you travel to the clinic — and our emergency line is answered seven days a week."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shadow-soft h-full rounded-3xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-navy",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-slate",
							children: c.text
						})]
					})
				}, c.title))
			})]
		})
	});
}
//#endregion
export { EmergencySection as t };
