import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-[2px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[color,box-shadow,border-color,background-color] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "glass-badge border-white/10 text-white [a&]:hover:bg-white/20",
        secondary:
          "border-border bg-secondary/70 text-white [a&]:hover:bg-secondary",
        destructive:
          "border-[#36F4A4]/30 bg-[#36F4A4]/12 text-white [a&]:hover:bg-[#36F4A4]/20",
        outline:
          "border-white/40 bg-transparent text-white [a&]:hover:bg-white [a&]:hover:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
