import React from "react";
import { polarToCartesian } from "../helpers";

interface LineProps {
  degree: number;
  fromRadius: number;
  toRadius: number;
  stroke?: string;
  strokeWidth?: number;
  dashed?: boolean;
}

export const Line: React.FC<LineProps> = ({
  degree,
  fromRadius,
  toRadius,
  stroke = "#999",
  strokeWidth = 1,
  dashed = false,
}) => {
  const from = polarToCartesian(fromRadius, degree);
  const to = polarToCartesian(toRadius, degree);

  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? "4,2" : undefined}
    />
  );
};
