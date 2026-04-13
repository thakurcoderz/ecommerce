import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type FilterOption = {
  key: string;
  label: string;
  href: string;
  isActive: boolean;
};

type FilterGroupProps = {
  icon?: ReactNode;
  label: string;
  options: FilterOption[];
  activeVariant: "default" | "secondary";
};

export function FilterGroup({ icon, label, options, activeVariant }: FilterGroupProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#061A1C]/70 p-4">
      <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Link key={option.key} href={option.href}>
            <Button
              variant={option.isActive ? activeVariant : "ghost"}
              size="sm"
              className={!option.isActive ? "border border-white/8 bg-transparent" : ""}
            >
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
