import React from 'react';

interface PlanetProps {
  planetKey: string;
  degree: { abs: number; rel: number };
  signKey: string;
  house: number;
  r?: number;
  cx?: number;
  cy?: number;
}

export const Planet: React.FC<PlanetProps> = ({
  planetKey,
  degree,
  signKey,
  house,
  r = 170,
  cx = 200,
  cy = 200,
}) => {
  // Convert abs degree to radians
  const angle = ((degree.abs - 90) * Math.PI) / 180; // -90 to start at top
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);

  return (
    <g>
      <circle cx={x} cy={y} r={12} fill="#6cf" stroke="#333" strokeWidth={2} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize={14} fill="#222">
        {planetKey}
      </text>
    </g>
  );
};