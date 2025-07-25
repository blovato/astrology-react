import React from 'react';
import { PlanetKey, SignKey, PLANETS, PALETTE } from '../constants';
import { Point } from './Point';

interface PlanetProps {
  diameter: number;
  planetKey: PlanetKey;
  absDegree: number;
}

export const Planet: React.FC<PlanetProps> = ({
  diameter,
  planetKey,
  absDegree,
}) => {
  return (
    <Point radius={diameter / 2 - 60} degree={absDegree}>
      <circle r={10} fill={PALETTE.sky} />
      <text transform="translate(0, 5)" textAnchor="middle" fontSize={14} fill="#222">
        {PLANETS[planetKey].symbol}
      </text>
    </Point>
  );
};
