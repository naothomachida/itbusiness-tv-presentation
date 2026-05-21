import React, { useMemo } from "react";
import { cn } from "../../lib/utils";

export default function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "#6B7280",
  width,
  height,
  className,
  ...props
}) {
  const memoizedGrid = useMemo(() => {
    const squares = [];
    const cols = Math.floor((width || 800) / (squareSize + gridGap));
    const rows = Math.floor((height || 600) / (squareSize + gridGap));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const isOn = Math.random() < flickerChance;
        squares.push(
          <div
            key={`${i}-${j}`}
            className={cn(
              "transition-opacity duration-200",
              isOn ? "opacity-100" : "opacity-20"
            )}
            style={{
              position: "absolute",
              left: j * (squareSize + gridGap),
              top: i * (squareSize + gridGap),
              width: squareSize,
              height: squareSize,
              backgroundColor: color,
              borderRadius: "1px",
            }}
          />
        );
      }
    }
    return squares;
  }, [width, height, squareSize, gridGap, flickerChance, color]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative w-full h-full">
        {memoizedGrid}
      </div>
    </div>
  );
}