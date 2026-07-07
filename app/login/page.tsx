"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogoBadge, Wordmark } from "@/components/logo";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Correo o contraseña incorrectos.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="grid min-h-screen grid-cols-[1.05fr_0.95fr] bg-paper">
      <div className="relative flex flex-col justify-between overflow-hidden bg-ink px-[60px] py-14 text-on-dark">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 0%, rgba(31,107,74,0.35), transparent 55%)",
          }}
        />
        <div className="relative flex items-center gap-3">
          <LogoBadge />
          <Wordmark className="text-[22px]" />
        </div>

        <div className="relative max-w-[400px]">
          <div className="mb-[22px] font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
            Gestión de carteras
          </div>
          <h1 className="mb-5 font-display text-[40px] font-medium leading-[1.14]">
            Tus inversiones, contadas con precisión.
          </h1>
          <p className="text-[15px] leading-[1.6] text-on-dark/62">
            Un espacio tranquilo y ordenado para seguir el estado de tus carteras. Sin
            ruido, sin distracciones.
          </p>
        </div>

        <div className="relative flex gap-[26px] font-mono text-[11px] tracking-[0.14em] text-on-dark/40">
          <span>PERSONAL</span>
          <span>·</span>
          <span>PRIVADO</span>
          <span>·</span>
          <span>v0 · ESQUELETO</span>
        </div>
      </div>

      <div className="flex items-center justify-center p-12">
        <div className="w-full max-w-[360px] animate-fade-up">
          <h2 className="mb-[6px] font-display text-[28px] font-medium">
            Iniciar sesión
          </h2>
          <p className="mb-8 text-[14px] text-muted">Accede a tu panel de carteras.</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-[18px]">
            <TextField
              id="email"
              label="Correo"
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              id="password"
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error ? (
              <p className="text-[13px] text-red-600">{error}</p>
            ) : null}

            <div className="-mt-1 flex justify-end">
              <a href="#" className="text-[13px] text-muted hover:text-muted">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button type="submit" disabled={loading} className="mt-[6px] w-full">
              {loading ? "Entrando…" : "Entrar"}
            </Button>
          </form>

          <div className="mt-7 border-t border-ink/10 pt-[22px] text-center text-[13px] text-muted">
            App de un solo usuario · autenticación vía{" "}
            <span className="font-medium text-ink">Supabase</span>
          </div>
        </div>
      </div>
    </div>
  );
}
