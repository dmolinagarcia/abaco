import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

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

  return (
    <div className="grid min-h-screen animate-fade grid-cols-[248px_1fr] bg-paper">
      <Sidebar userLabel={userLabel} />
      <div className="flex min-w-0 flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-9">
          <div className="mx-auto max-w-[1080px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
