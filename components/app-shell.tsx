"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export function AppShell({
  userLabel,
  children,
}: {
  userLabel: string;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen animate-fade bg-paper lg:flex">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[248px] transform transition-transform duration-200 lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:flex-none lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar userLabel={userLabel} onClose={() => setMenuOpen(false)} />
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 overflow-auto p-5 lg:p-9">
          <div className="mx-auto max-w-[1080px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
