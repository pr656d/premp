import type { ReactNode } from "react";

interface Props {
  title: string;
  tags?: string[];
  rotate?: number;
  children: ReactNode;
}

export function TapedCard({ title, tags = [], rotate = 0, children }: Props) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotate}deg)` }}>
      {/* washi tape */}
      <span
        aria-hidden
        className="absolute -top-3 left-6 h-5 w-16 rotate-[-6deg] bg-[var(--accent)]/25 shadow-sm"
      />
      <span
        aria-hidden
        className="absolute -top-3 right-8 h-5 w-14 rotate-[8deg] bg-[var(--accent)]/20 shadow-sm"
      />
      <div className="rounded-sm border border-[var(--rule)] bg-[var(--paper)] p-5 shadow-[0_2px_0_var(--rule)]">
        <h3 className="ink-hand text-2xl text-[var(--ink)]">{title}</h3>
        <div className="mt-2 text-sm text-[var(--ink-muted)] leading-relaxed">{children}</div>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="rounded-sm border border-dashed border-[var(--rule)] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--ink-faint)]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
