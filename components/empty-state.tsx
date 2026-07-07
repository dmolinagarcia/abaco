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
    <div className="flex flex-col items-center rounded-[14px] border border-dashed border-ink/20 bg-surface/50 px-[40px] py-[64px] text-center">
      <div className="mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-surface-empty">
        {icon}
      </div>
      <h2 className="mb-[10px] font-display text-[23px] font-medium">{title}</h2>
      <p className="mb-[26px] max-w-[420px] text-[14.5px] leading-[1.6] text-muted">
        {description}
      </p>
      {actions ? <div className="flex gap-[10px]">{actions}</div> : null}
    </div>
  );
}
