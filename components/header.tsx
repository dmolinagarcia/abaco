"use client";

import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const title = NAV_ITEMS.find((item) => pathname.startsWith(item.href))?.label ?? "Ábaco";

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-5 border-b border-ink/9 bg-paper/80 px-9 py-5 backdrop-blur-[8px]">
      <div>
        <div className="mb-[3px] font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
          Ábaco
        </div>
        <h1 className="font-display text-[24px] font-medium">{title}</h1>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex min-w-[220px] items-center gap-2 rounded-[9px] border border-ink/12 bg-surface px-[13px] py-2 text-[13px] text-muted">
          <Search size={15} />
          <span>Buscar…</span>
        </div>
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
