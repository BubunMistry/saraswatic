"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ----------------------------------------
   OUTER BUTTON VARIANTS (wrapper)
----------------------------------------- */
const customButtonVariants = cva(
  "cursor-pointer rounded-[16px] border-none relative transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-y-[-2px] inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default:
          "after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:z-[-1]",
        outline: "border border-gray-300 bg-transparent",
        glow:
          "after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:z-[-1]",
      },

      /* RESPONSIVE SIZES */
      size: {
        default:
          "text-[1.1rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.45rem] p-[1.5px] sm:p-[2px] md:p-[2.5px] lg:p-[3px]",
        sm:
          "text-[0.95rem] sm:text-[1.05rem] md:text-[1.15rem] p-[1px] sm:p-[1.5px] md:p-[2px]",
        lg:
          "text-[1.3rem] sm:text-[1.4rem] md:text-[1.55rem] lg:text-[1.65rem] p-[2.5px] sm:p-[3px] md:p-[3.5px] lg:p-[4px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/* ----------------------------------------
   INNER GRADIENT BUTTON LAYER
----------------------------------------- */
const innerVariants = cva(
  `
    rounded-[14px] text-white z-[3] relative 
    transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    bg-[radial-gradient(circle_80px_at_80%_-50%,#777777,#0f1111)]
    before:content-[''] before:absolute before:w-full before:h-full 
    before:left-0 before:top-0 before:rounded-[14px] 
    before:bg-[radial-gradient(circle_60px_at_0%_100%,rgba(0,225,255,0.1),transparent)]
  `,
  {
    variants: {
      variant: {
        default: "",
        outline:
          "bg-transparent text-black border-none before:hidden shadow-none",
        glow:
          "bg-[radial-gradient(circle_80px_at_80%_-50%,#666666,#000000)]",
      },

      /* RESPONSIVE SIZES */
      size: {
        default:
          "px-[14px] py-[10px] sm:px-[20px] sm:py-[12px] md:px-[26px] md:py-[14px] lg:px-[30px] lg:py-[16px]",
        sm:
          "px-[10px] py-[8px] sm:px-[14px] sm:py-[10px] md:px-[18px] md:py-[12px]",
        lg:
          "px-[18px] py-[12px] sm:px-[24px] sm:py-[14px] md:px-[28px] md:py-[16px] lg:px-[34px] lg:py-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/* ----------------------------------------
   COMPONENT
----------------------------------------- */
export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(customButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            innerVariants({ variant, size }),
            "flex items-center gap-2 group-hover:translate-x-[2px]"
          )}
        >
          {children}
        </span>
      </Comp>
    )
  }
)

CustomButton.displayName = "CustomButton"

export { CustomButton, customButtonVariants }
