import type { ReactNode } from "react";

import { TheaterPanel } from "@/components/ui/theater-panel";
import { cn } from "@/lib/utils";

type EmptyStatePanelProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function EmptyStatePanel({
  icon,
  title,
  description,
  actions,
  className,
}: EmptyStatePanelProps) {
  return (
    <TheaterPanel
      className={cn(
        "mx-auto flex max-w-2xl flex-col items-center rounded-[32px] p-10 text-center md:p-12",
        className
      )}
    >
      {icon ? (
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
          {icon}
        </div>
      ) : null}
      <h1 className={cn("text-4xl font-[340] tracking-[-0.04em] text-white", icon ? "mt-6" : "")}>{title}</h1>
      {description ? <p className="mt-4 max-w-xl text-sm leading-8 text-muted-foreground">{description}</p> : null}
      {actions ? <div className="mt-8">{actions}</div> : null}
    </TheaterPanel>
  );
}
