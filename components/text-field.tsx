import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function TextField({ label, id, className = "", ...props }: TextFieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-[7px]">
      <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
        {label}
      </span>
      <input
        id={id}
        className={`w-full rounded-[9px] border border-ink/16 bg-surface px-[14px] py-[12px] text-[14.5px] text-ink outline-none focus:border-accent ${className}`}
        {...props}
      />
    </label>
  );
}
