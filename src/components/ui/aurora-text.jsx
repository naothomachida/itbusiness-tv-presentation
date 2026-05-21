import React from "react";
import { cn } from "../../lib/utils";

export default function AuroraText({
  children,
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent animate-aurora",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}