import React from 'react';
import { PLANETS, PlanetKey } from '../constants';

interface PlanetIconProps {
  name: PlanetKey;
  color?: string;
}

export const PlanetIcon: React.FC<PlanetIconProps> = ({ name, color = '#6cf' }) => {
  // Render a colored circle with the planet's symbol
  return (
    <svg width={24} height={24}>
      <circle cx={12} cy={12} r={10} fill={color} />
      <text x={12} y={16} textAnchor="middle" fontSize={12} fill="#fff">{PLANETS[name].symbol}</text>
    </svg>
  );
}; 