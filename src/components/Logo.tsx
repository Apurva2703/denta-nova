export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="gradient-primary shadow-glow flex size-10 shrink-0 items-center justify-center rounded-2xl">
        <svg viewBox="0 0 24 24" className="size-5.5" aria-hidden="true" fill="none">
          <path
            d="M12 6.2c1.6-1.4 3.2-2 4.7-1.6 2 .5 3.3 2.5 3.3 5 0 3.4-1.2 6.4-2.6 8.9-.7 1.2-2.4 1-2.9-.3l-1.2-3.3c-.4-1-1.8-1-2.2 0l-1.2 3.3c-.5 1.3-2.2 1.5-2.9.3C5.2 16 4 13 4 9.6c0-2.5 1.3-4.5 3.3-5 1.5-.4 3.1.2 4.7 1.6Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={`block font-display text-base font-bold tracking-wide ${light ? "text-white" : "text-navy"}`}
        >
          CARE 32
        </span>
        <span
          className={`block truncate text-[0.6rem] font-medium tracking-[0.16em] uppercase ${light ? "text-white/70" : "text-slate"}`}
        >
          Multispeciality Dental Care
        </span>
      </span>
    </span>
  );
}
