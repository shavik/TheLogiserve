export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 text-paper">
      <svg
        viewBox="0 0 40 40"
        className={compact ? "h-8 w-8" : "h-10 w-10"}
        aria-hidden
      >
        <rect width="40" height="40" rx="10" fill="#10242e" />
        <circle cx="20" cy="20" r="11" stroke="#d08a45" strokeWidth="1.6" fill="none" />
        <path
          d="M9 25c6-10 16-10 22 0"
          stroke="#4ea8a0"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="14" cy="18" r="1.6" fill="#f3ebe0" />
        <circle cx="27" cy="17" r="1.6" fill="#d08a45" />
      </svg>
      <span className="leading-none">
        <span className="block font-serif text-[1.15rem] tracking-tight">
          TheLogiserve
        </span>
        {!compact && (
          <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
            Freight · Clearance · Care
          </span>
        )}
      </span>
    </span>
  );
}
