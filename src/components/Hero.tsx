import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Award, ShieldCheck, Sparkles, Star } from "lucide-react";
import type { MouseEvent } from "react";
import doctorImg from "@/assets/hero-dentist.png";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const docX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const docY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const cardX = useTransform(sx, [-0.5, 0.5], [28, -28]);
  const cardY = useTransform(sy, [-0.5, 0.5], [20, -20]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="gradient-hero relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
      onMouseMove={onMove}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-cyan-soft/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-[24rem] rounded-full bg-mint/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.16em] text-primary-dark uppercase shadow-soft"
          >
            <Sparkles className="size-3.5" /> Advanced Dental Care
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl"
          >
            Your Smile Deserves <span className="text-gradient">Exceptional Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            Experience advanced dentistry designed around your comfort, confidence and long-term
            oral health, delivered by experienced dental professionals using modern technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/appointment"
              className="gradient-primary shadow-glow group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary bg-card px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-soft-blue"
            >
              Explore Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" /> Sterilised & safe environment
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="size-4 text-primary" /> Award-winning clinical team
            </span>
          </motion.div>
        </div>

        <div className="relative [perspective:1400px]">
          <motion.div
            style={{ x: docX, y: docY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute inset-x-6 top-10 bottom-0 rounded-[3rem] bg-gradient-to-b from-soft-blue to-white shadow-card" />
            <div className="absolute inset-x-12 bottom-2 h-10 rounded-full bg-navy/10 blur-2xl" />
            <img
              src={doctorImg}
              alt="Experienced CARE 32 dentist in a white coat smiling"
              width={1024}
              height={1280}
              className="relative z-10 w-full drop-shadow-[0_30px_40px_rgba(18,48,71,0.18)]"
            />
          </motion.div>

          <motion.div
            style={{ x: cardX, y: cardY }}
            className="glass shadow-card absolute top-16 -left-2 z-20 rounded-2xl px-4 py-3 sm:left-2"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-soft-mint">
                <Star className="size-5 fill-primary text-primary" />
              </span>
              <span>
                <span className="block text-lg leading-none font-bold text-navy">4.9/5</span>
                <span className="text-xs text-slate">2,400+ reviews</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            style={{ x: cardY, y: cardX }}
            className="glass shadow-card absolute right-0 bottom-24 z-20 rounded-2xl px-4 py-3"
          >
            <span className="block text-lg leading-none font-bold text-navy">15+ Years</span>
            <span className="text-xs text-slate">Clinical experience</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass shadow-card absolute top-4 right-4 z-20 flex items-center gap-2 rounded-2xl px-4 py-3"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path
                d="M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z"
                fill="var(--primary)"
              />
            </svg>
            <span className="text-xs font-semibold text-navy">Painless Treatment</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
