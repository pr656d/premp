interface Props { kind: "arrow" | "star" | "squiggle" | "asterisk" | "check"; className?: string }

export function Doodle({ kind, className = "" }: Props) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "arrow") return (
    <svg viewBox="0 0 60 30" className={className} {...common}><path d="M4 15 Q 20 5, 40 15 T 56 15"/><path d="M50 10 L56 15 L50 20"/></svg>
  );
  if (kind === "star") return (
    <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3 L14 10 L21 11 L15.5 15.5 L17 22 L12 18 L7 22 L8.5 15.5 L3 11 L10 10 Z"/></svg>
  );
  if (kind === "squiggle") return (
    <svg viewBox="0 0 100 12" className={className} {...common}><path d="M2 6 Q 12 0, 22 6 T 42 6 T 62 6 T 82 6 T 98 6"/></svg>
  );
  if (kind === "check") return (
    <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 13 L10 18 L21 6"/></svg>
  );
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 4 V 20 M4 12 H 20 M6 6 L 18 18 M18 6 L 6 18"/></svg>
  );
}
