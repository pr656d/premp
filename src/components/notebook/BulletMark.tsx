interface Props { className?: string }

/**
 * Reusable bullet marker — hand-drawn dash in the red-pencil accent.
 * Use in a flex row with `shrink-0` so wrapped lines hang under the text.
 */
export function BulletMark({ className = "" }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center text-[var(--red-pencil)] ${className}`}
      style={{ width: "0.9em", height: "1.35em" }}
    >
      <svg viewBox="0 0 14 14" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2 8 Q 6 6, 12 7" />
      </svg>
    </span>
  );
}
