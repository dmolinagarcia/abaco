export function LogoGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F2EC"
      strokeWidth={1.7}
      strokeLinecap="round"
    >
      <line x1="6" y1="4" x2="6" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
      <circle cx="6" cy="9" r="2" fill="#F5F2EC" stroke="none" />
      <circle cx="12" cy="15" r="2" fill="#F5F2EC" stroke="none" />
      <circle cx="18" cy="7" r="2" fill="#F5F2EC" stroke="none" />
    </svg>
  );
}

export function LogoBadge({
  size = 34,
  radius = 8,
  glyphSize = 18,
}: {
  size?: number;
  radius?: number;
  glyphSize?: number;
}) {
  return (
    <div
      className="flex flex-none items-center justify-center bg-accent"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <LogoGlyph size={glyphSize} />
    </div>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-[0.04em] ${className}`}>
      ÁBACO
    </span>
  );
}
