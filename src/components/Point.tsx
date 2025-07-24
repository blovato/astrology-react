import React from 'react';
import { polarToCartesian } from '../helpers';

interface PointProps {
  degree: number;
  radius: number;
  children?: React.ReactNode;
}

export const Point: React.FC<PointProps> = ({ degree, radius, children }) => {
  const { x, y } = polarToCartesian(radius, degree);
  return (
    <g transform={`translate(${x}, ${y})`}>
      {children}
    </g>
  );
}; 