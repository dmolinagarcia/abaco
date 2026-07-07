"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { LogoBadge, Wordmark } from "@/components/logo";
import { LogoutButton } from "@/components/logout-button";
import { NAV_ITEMS } from "@/lib/nav";

export function Sidebar({
  userLabel,
  onClose,
}: {
  userLabel: string;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const initial = userLabel.charAt(0).toUpperCase();

  return (
    <aside className="flex h-full w-[248px] flex-col bg-ink px-4 py-[22px] text-on-dark">
      <div className="flex items-center justify-between gap-[11px] px-2 pb-[22px] pt-[6px]">
        <div className="flex items-center gap-[11px]">
          <LogoBadge size={30} radius={7} glyphSize={16} />
          <Wordmark className="text-[19px]" />
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="flex rounded-[6px] p-1 text-on-dark/50 hover:bg-on-dark/8 hover:text-on-dark lg:hidden"
        >
          <X size={18} />
        </button>
      </div>

      <div className="px-[10px] pb-[10px] font-mono text-[10px] tracking-[0.16em] text-on-dark/34">
        MENÚ
      </div>

      <nav className="flex flex-col gap-[3px]">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);

          if (item.soon) {
            return (
              <span
                key={item.id}
                className="flex w-full items-center justify-between gap-2 rounded-[9px] px-[11px] py-[10px] text-on-dark/42"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <item.Icon size={18} className="flex-none" />
                  <span className="truncate text-[14px] font-medium">{item.label}</span>
                </span>
                <span className="rounded-[5px] bg-on-dark/8 px-[6px] py-[2px] font-mono text-[9px] tracking-[0.1em] text-on-dark/40">
                  PRONTO
                </span>
              </span>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className={`flex w-full items-center justify-between gap-2 rounded-[9px] px-[11px] py-[10px] transition-colors ${
                isActive
                  ? "bg-accent/22 text-on-dark"
                  : "text-on-dark/78 hover:bg-on-dark/8"
              }`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <item.Icon size={18} className="flex-none" />
                <span className="truncate text-[14px] font-medium">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-on-dark/10 pt-4">
        <div className="flex items-center gap-[11px] px-[10px] py-2">
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent font-mono text-[13px] font-semibold text-on-dark">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-semibold">{userLabel}</div>
            <div className="truncate text-[11px] text-on-dark/50">Cuenta personal</div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
