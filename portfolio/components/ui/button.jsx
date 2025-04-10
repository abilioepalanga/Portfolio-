import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",

    {
        variants: {
            variant: {
                default:
                    "bg-blue-700 text-white ring-accent   hover:text-primary focus:ring-2 focus:ring-accent-hover",
                primary:
                    "bg-primary text-white ring-accent   hover:text-primary focus:ring-2 focus:ring-accent-hover",
                outline:
                    "bg-transparent text-primary ring-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary",
            },
            size: {
                default: "h-[40px] px-6 ",
                md: "h-[48px] px-6 ",
                lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
