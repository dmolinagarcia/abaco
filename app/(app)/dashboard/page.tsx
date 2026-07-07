import { LayoutGrid } from "lucide-react";
import { GhostCard } from "@/components/ghost-card";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/button";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-3">
        <GhostCard />
        <GhostCard />
        <GhostCard />
      </div>

      <EmptyState
        icon={<LayoutGrid size={26} className="text-accent" strokeWidth={1.6} />}
        title="Tu panel está listo para llenarse"
        description="Aún no hay contenido. Los indicadores y resúmenes de tus carteras aparecerán aquí en próximas iteraciones."
        actions={
          <>
            <Button variant="primary" className="w-full sm:w-auto">
              Empezar a configurar
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Ver documentación
            </Button>
          </>
        }
      />
    </>
  );
}
