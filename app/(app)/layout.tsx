import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AppShell } from "@/components/app-shell";

function displayName(email: string | undefined, fullName: string | undefined) {
  if (fullName) return fullName;
  if (!email) return "Cuenta";
  const local = email.split("@")[0];
  return local.charAt(0).toUpperCase() + local.slice(1);
}

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const userLabel = displayName(user.email, user.user_metadata?.full_name);

  return <AppShell userLabel={userLabel}>{children}</AppShell>;
}
