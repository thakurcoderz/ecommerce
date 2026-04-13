import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-transparent text-[16px] font-normal leading-[1.5] tracking-[0.01em] transition-[background-color,color,border-color,box-shadow,transform,opacity] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[2px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_2px_2px,rgba(0,0,0,0.1)_0px_4px_4px,rgba(255,255,255,0.04)_0px_1px_0px_inset] hover:opacity-90",
        destructive:
          "bg-secondary text-secondary-foreground border-border hover:bg-[#143228]",
        outline:
          "border-white bg-transparent text-white hover:bg-white hover:text-black",
        secondary:
          "bg-secondary text-secondary-foreground border-border hover:bg-[#143228]",
        ghost:
          "bg-transparent text-white hover:bg-white/[0.1]",
        link: "border-none rounded-none px-0 py-0 text-muted-foreground underline-offset-4 hover:text-white hover:underline",
      },
      size: {
        default: "h-12 px-4 pr-[26px]",
        sm: "h-10 px-3.5 pr-5 text-[14px]",
        lg: "h-12 px-4 pr-[26px] text-[16px]",
        icon: "size-11 p-0",
        "icon-sm": "size-9 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
