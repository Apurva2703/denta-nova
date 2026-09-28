import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-CWub4ygU.mjs";
import { t as Reveal } from "./Reveal-CucDQ_zn.mjs";
import { D as MapPin, F as Clock, I as CircleCheck, O as Mail, S as Phone } from "../_libs/lucide-react.mjs";
import { t as ComfortSection } from "./ComfortSection-BW5k7-hO.mjs";
import { t as ProcessSection } from "./ProcessSection-CcHYLLS6.mjs";
import { a as Route$8, c as services, s as doctors } from "./router-CEUnSkjT.mjs";
import { n as PricingTransparency, t as FaqSection } from "./FaqSection-DA-2GdW-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appointment-BZbXlK5g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-slate/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
function AppointmentForm({ defaultDoctor = "" }) {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		const next = {};
		if (!data["name"]?.trim()) next["name"] = "Please enter your full name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data["email"] ?? "")) next["email"] = "Enter a valid email address.";
		if (!/^[0-9+\-\s()]{8,}$/.test(data["phone"] ?? "")) next["phone"] = "Enter a valid phone number.";
		if (!data["date"]) next["date"] = "Choose a preferred date.";
		if (!data["time"]) next["time"] = "Choose a preferred time.";
		if (!data["service"]) next["service"] = "Select a treatment.";
		setErrors(next);
		if (Object.keys(next).length === 0) setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "shadow-card flex flex-col items-center rounded-3xl border border-border bg-card p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				transition: {
					delay: .15,
					type: "spring",
					stiffness: 180,
					damping: 14
				},
				className: "flex size-16 items-center justify-center rounded-full bg-soft-mint",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8 text-primary-dark" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-2xl font-semibold",
				children: "Appointment Request Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm leading-relaxed text-slate",
				children: "Thank you. Our care coordinator will call you within a few hours to confirm your slot, your doctor and anything you should prepare before the visit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setSent(false),
				className: "mt-7 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-soft-blue",
				children: "Book another appointment"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "shadow-card rounded-3xl border border-border bg-card p-7 sm:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						error: errors["name"] ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							className: field,
							placeholder: "Jane Doe",
							autoComplete: "name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						error: errors["email"] ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							className: field,
							placeholder: "jane@email.com",
							autoComplete: "email"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone Number",
						error: errors["phone"] ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							className: field,
							placeholder: "+91 90000 12345",
							autoComplete: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred Date",
						error: errors["date"] ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "date",
							type: "date",
							className: field
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred Time",
						error: errors["time"] ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "time",
							className: field,
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a time"
							}), [
								"10:30 AM",
								"12:00 PM",
								"01:30 PM",
								"05:00 PM",
								"06:30 PM",
								"08:00 PM"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Doctor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "doctor",
							className: field,
							defaultValue: defaultDoctor,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any available doctor"
							}), doctors.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: d.slug,
								children: [
									d.name,
									" — ",
									d.specialty
								]
							}, d.slug))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Service",
							error: errors["service"] ?? "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "service",
								className: field,
								defaultValue: "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a treatment"
								}), services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.slug,
									children: s.title
								}, s.slug))]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 4,
								className: field,
								placeholder: "Tell us about your symptoms or what you would like to improve."
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "gradient-primary shadow-glow mt-7 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
				children: "Confirm Appointment Request"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-slate",
				children: "We reply within a few hours during clinic timings. For emergencies, please call us."
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-xs font-semibold tracking-wide text-navy uppercase",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block text-xs text-destructive",
				children: error
			})
		]
	});
}
function AppointmentPage() {
	const { doctor } = Route$8.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Appointments",
			title: "Book Your Visit With Confidence",
			description: "Tell us what you need and our team will help you find the right treatment, doctor and appointment time for your dental care."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentForm, { defaultDoctor: doctor ?? "" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "glass shadow-card h-full rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Clinic Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate",
								children: "Prefer to speak to someone? Our front desk is happy to help you choose the right appointment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-navy/85",
											children: "123 Sample Street, Demo Plaza, First Floor, City Center, Pune 411001"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+911234567890",
											className: "text-navy/85 hover:text-primary-dark",
											children: "+91 12345 67890"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:info@example.com",
											className: "text-navy/85 hover:text-primary-dark",
											children: "info@example.com"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-primary" }), " Opening Hours"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-4 space-y-3 text-sm",
								children: [
									["Mon – Sat (Morning)", "10:30 AM – 2:00 PM"],
									["Mon – Sat (Evening)", "5:00 PM – 8:30 PM"],
									["Sunday", "Emergency only"]
								].map(([d, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4 border-b border-border pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-slate",
										children: d
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-navy",
										children: t
									})]
								}, d))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 rounded-2xl border border-border bg-soft-mint/70 p-4 text-xs leading-relaxed text-navy/80",
								children: "Dental emergency? Call our 24/7 helpline and we will arrange a priority slot the same day."
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComfortSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingTransparency, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
//#endregion
export { AppointmentPage as component };
