import { clsx } from "clsx";
import React from "react";

import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text = ({
  size = "md",
  children,
  asChild,
  className,
}: TextProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
