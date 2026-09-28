import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { D as MapPin, F as Clock, O as Mail, S as Phone, g as Send } from "../_libs/lucide-react.mjs";
import { t as ProcessSection } from "./ProcessSection-CcHYLLS6.mjs";
import { t as EmergencySection } from "./EmergencySection-CDOxCpvC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C1L-gF4V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy outline-none placeholder:text-slate/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
var details = [
	{
		icon: MapPin,
		label: "Our Clinic",
		value: "123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001"
	},
	{
		icon: Phone,
		label: "Call us",
		value: "+91 12345 67890"
	},
	{
		icon: Mail,
		label: "Email us",
		value: "info@example.com"
	},
	{
		icon: Clock,
		label: "Opening hours",
		value: "Mon–Sat 10:30 AM–2:00 PM & 5:00 PM–8:30 PM · Sun emergency only"
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "We're Here for Your Smile",
			description: "Have a question, need guidance or want to schedule a visit? Our team is ready to help you take the next step toward better dental health."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shadow-soft flex gap-4 rounded-3xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-soft-blue text-primary-dark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold tracking-wide text-slate uppercase",
							children: d.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm break-words text-navy/85",
							children: d.value
						})] })]
					}, d.label))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shadow-card flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-16 items-center justify-center rounded-full bg-soft-mint",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-7 text-primary-dark" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-2xl font-semibold",
								children: "Message sent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm text-slate",
								children: "Thank you for reaching out. Our team will respond within one working day."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "shadow-card rounded-3xl border border-border bg-card p-7 sm:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Send us a message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate",
								children: "Share a few details and the right team member will get back to you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "name",
										placeholder: "Full name",
										className: field
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "email",
										type: "email",
										placeholder: "Email address",
										className: field
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "phone",
										placeholder: "Phone number",
										className: field
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "subject",
										placeholder: "Subject",
										className: field
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										name: "message",
										rows: 5,
										placeholder: "How can we help you?",
										className: `${field} sm:col-span-2`
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "gradient-primary shadow-glow mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: "Send Message"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20 sm:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shadow-soft relative flex h-72 items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-soft-blue to-soft-mint sm:h-96",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass shadow-card relative rounded-3xl px-8 py-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mx-auto size-7 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-semibold text-navy",
								children: "CARE 32 Dental Care Center"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate",
								children: "123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.google.com/?q=Pune",
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex rounded-full border border-primary bg-card px-5 py-2.5 text-xs font-semibold text-primary-dark",
								children: "Open in Maps"
							})
						]
					})]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {})
	] });
}
//#endregion
export { ContactPage as component };
