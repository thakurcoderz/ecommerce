import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      suppressHydrationWarning
      className={cn(
        "file:text-foreground placeholder:text-[#71717A] selection:bg-[#36F4A4] selection:text-black border-[#3F3F46] h-12 w-full min-w-0 rounded-lg border bg-[#061A1C] px-4 py-3 text-base text-white shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.03)_0px_1px_0px_inset] transition-[border-color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-[#36F4A4] focus-visible:ring-[2px] focus-visible:ring-[#36F4A4] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
