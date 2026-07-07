import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  actions,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-[14px] border border-dashed border-ink/20 bg-surface/50 px-6 py-10 text-center sm:px-[40px] sm:py-[64px]">
      <div className="mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-surface-empty">
        {icon}
      </div>
      <h2 className="mb-[10px] font-display text-[23px] font-medium">{title}</h2>
      <p className="mb-[26px] max-w-[420px] text-[14.5px] leading-[1.6] text-muted">
        {description}
      </p>
      {actions ? (
        <div className="flex w-full flex-col gap-[10px] sm:w-auto sm:flex-row">{actions}</div>
      ) : null}
    </div>
  );
}
