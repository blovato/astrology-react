import React from 'react';

interface NatalChartCanvasProps {
  width?: number;
  height?: number;
  background?: string;
  children?: React.ReactNode;
}

export const NatalChartCanvas: React.FC<NatalChartCanvasProps> = ({
  width = 400,
  height = 400,
  background = '#fff',
  children,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ background, borderRadius: '50%', border: '1px solid #ccc', display: 'block' }}
    >
      {/* Chart circle */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={Math.min(width, height) / 2 - 10}
        fill="#f9f9f9"
        stroke="#333"
        strokeWidth={2}
      />
      {children}
    </svg>
  );
}; 