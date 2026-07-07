import type { ComponentType } from "react";
import { LayoutDashboard, Briefcase, CreditCard, BarChart3 } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  soon: boolean;
  Icon: ComponentType<{ size?: number; className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", soon: false, Icon: LayoutDashboard },
  { id: "portfolios", label: "Carteras", href: "/portfolios", soon: true, Icon: Briefcase },
  { id: "accounts", label: "Cuentas", href: "/accounts", soon: true, Icon: CreditCard },
  { id: "assets", label: "Activos", href: "/assets", soon: true, Icon: BarChart3 },
];
