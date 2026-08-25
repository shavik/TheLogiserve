type IconProps = { className?: string };

export function IconAir({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M8 38h48M14 38c2-10 8-18 18-18s16 8 18 18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 34l40-8-6 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconOcean({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path d="M10 34h44v8H10z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 34V22h28v12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M26 22V14h12v8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 48c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconSurface({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path d="M8 36h28v10H8z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M36 40h12l6 6v4H36" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="50" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="46" cy="50" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 28h20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconForward({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="48" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="46" cy="46" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M21 22l9 8m16-6-8 8m10 10-10-8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconCustoms({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path d="M18 12h20l8 8v32H18z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M38 12v8h8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 30h16M24 38h12M24 46h8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function RouteMap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 520 280" className={className} fill="none" aria-hidden>
        <path
        className="route-line"
        pathLength="1"
        d="M20 210 C80 210 90 80 160 90 S250 220 320 160 S430 40 500 70"
        stroke="#4ea8a0"
        strokeWidth="2"
      />
      <circle cx="20" cy="210" r="6" fill="#f3ebe0" />
      <circle cx="160" cy="90" r="6" fill="#d08a45" />
      <circle cx="320" cy="160" r="6" fill="#8bb4d4" />
      <circle cx="500" cy="70" r="6" fill="#f3ebe0" />
      <text x="28" y="232" fill="#9aa8b4" fontSize="11" fontFamily="ui-monospace, monospace">
        ORIGIN
      </text>
      <text x="148" y="74" fill="#9aa8b4" fontSize="11" fontFamily="ui-monospace, monospace">
        PORT / AIRPORT
      </text>
      <text x="300" y="186" fill="#9aa8b4" fontSize="11" fontFamily="ui-monospace, monospace">
        BORDER
      </text>
      <text x="430" y="58" fill="#9aa8b4" fontSize="11" fontFamily="ui-monospace, monospace">
        DESTINATION
      </text>
    </svg>
  );
}

export const serviceIcons = {
  "air-freight": IconAir,
  "ocean-freight": IconOcean,
  "surface-transportation": IconSurface,
  "freight-forwarding": IconForward,
  "customs-clearance": IconCustoms,
};
