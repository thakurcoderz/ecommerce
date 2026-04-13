import * as React from "react";

import { cn } from "@/lib/utils";

export function TheaterPanel({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("theater-card rounded-[28px]", className)} {...props} />;
}
