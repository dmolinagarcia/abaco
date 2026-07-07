"use client";

import { usePathname } from "next/navigation";
import { Menu, Search, Bell } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const pathname = usePathname();
  const title = NAV_ITEMS.find((item) => pathname.startsWith(item.href))?.label ?? "Ábaco";

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-ink/9 bg-paper/80 px-4 py-4 backdrop-blur-[8px] lg:gap-5 lg:px-9 lg:py-5">
      <div className="flex items-center gap-3 lg:gap-0">
        <button
          onClick={onMenuClick}
          aria-label="Abrir menú"
          className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[9px] border border-ink/12 bg-surface text-ink transition-colors hover:bg-surface-alt lg:hidden"
        >
          <Menu size={17} />
        </button>
        <div>
          <div className="mb-[3px] hidden font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2 lg:block">
            Ábaco
          </div>
          <h1 className="font-display text-[19px] font-medium lg:text-[24px]">{title}</h1>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="hidden min-w-[220px] items-center gap-2 rounded-[9px] border border-ink/12 bg-surface px-[13px] py-2 text-[13px] text-muted sm:flex">
          <Search size={15} />
          <span>Buscar…</span>
        </div>
        <button
          title="Buscar"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-ink/12 bg-surface text-ink transition-colors hover:bg-surface-alt sm:hidden"
        >
          <Search size={17} />
        </button>
        <button
          title="Notificaciones"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-ink/12 bg-surface text-ink transition-colors hover:bg-surface-alt"
        >
          <Bell size={17} />
        </button>
      </div>
    </header>
  );
}
