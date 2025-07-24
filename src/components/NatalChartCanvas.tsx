import React from 'react';

interface NatalChartCanvasProps {
  diameter: number;
  children?: React.ReactNode;
}

export const NatalChartCanvas: React.FC<NatalChartCanvasProps> = ({
  diameter,
  children,
}) => {
  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`${-(diameter / 2)} ${-(diameter / 2)} ${diameter} ${diameter}`}
      style={{ display: 'block' }}
    >
      {children}
    </svg>
  );
}; 
