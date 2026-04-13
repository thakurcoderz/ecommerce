import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatTileProps = {
  value: string;
  label: string;
  description?: ReactNode;
  className?: string;
};

export function StatTile({ value, label, description, className }: StatTileProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="number-display text-4xl text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
