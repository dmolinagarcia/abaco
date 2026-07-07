"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      title="Cerrar sesión"
      className="flex rounded-[6px] p-[6px] text-on-dark/50 transition-colors hover:bg-on-dark/8 hover:text-on-dark disabled:opacity-50"
    >
      <LogOut size={17} />
    </button>
  );
}
