import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[9px] text-[14px] font-semibold font-sans cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "border-none bg-accent text-on-dark hover:bg-accent-hover",
  secondary:
    "border border-ink/16 bg-surface text-ink hover:bg-surface-alt",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} px-[18px] py-[11px] ${className}`}
      {...props}
    />
  );
}
