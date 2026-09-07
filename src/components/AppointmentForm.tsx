import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";

type Errors = Record<string, string>;

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-slate/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

export function AppointmentForm({ defaultDoctor = "" }: { defaultDoctor?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Errors = {};
    if (!data["name"]?.trim()) next["name"] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data["email"] ?? ""))
      next["email"] = "Enter a valid email address.";
    if (!/^[0-9+\-\s()]{8,}$/.test(data["phone"] ?? ""))
      next["phone"] = "Enter a valid phone number.";
    if (!data["date"]) next["date"] = "Choose a preferred date.";
    if (!data["time"]) next["time"] = "Choose a preferred time.";
    if (!data["service"]) next["service"] = "Select a treatment.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="shadow-card flex flex-col items-center rounded-3xl border border-border bg-card p-10 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 180, damping: 14 }}
          className="flex size-16 items-center justify-center rounded-full bg-soft-mint"
        >
          <CheckCircle2 className="size-8 text-primary-dark" />
        </motion.span>
        <h3 className="mt-6 text-2xl font-semibold">Appointment Request Received</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">
          Thank you. Our care coordinator will call you within a few hours to confirm your slot,
          your doctor and anything you should prepare before the visit.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-soft-blue"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="shadow-card rounded-3xl border border-border bg-card p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors["name"] ?? ""}>
          <input name="name" className={field} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors["email"] ?? ""}>
          <input name="email" type="email" className={field} placeholder="jane@email.com" autoComplete="email" />
        </Field>
        <Field label="Phone Number" error={errors["phone"] ?? ""}>
          <input name="phone" className={field} placeholder="+91 90000 12345" autoComplete="tel" />
        </Field>
        <Field label="Preferred Date" error={errors["date"] ?? ""}>
          <input name="date" type="date" className={field} />
        </Field>
        <Field label="Preferred Time" error={errors["time"] ?? ""}>
          <select name="time" className={field} defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            {["10:30 AM", "12:00 PM", "01:30 PM", "05:00 PM", "06:30 PM", "08:00 PM"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Doctor">
          <select name="doctor" className={field} defaultValue={defaultDoctor}>
            <option value="">Any available doctor</option>
            {doctors.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} — {d.specialty}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service" error={errors["service"] ?? ""}>
            <select name="service" className={field} defaultValue="">
              <option value="" disabled>
                Select a treatment
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea
              name="message"
              rows={4}
              className={field}
              placeholder="Tell us about your symptoms or what you would like to improve."
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="gradient-primary shadow-glow mt-7 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Confirm Appointment Request
      </button>
      <p className="mt-3 text-center text-xs text-slate">
        We reply within a few hours during clinic timings. For emergencies, please call us.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
