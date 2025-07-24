import React from 'react';
import { PlanetKey, SignKey, PLANETS } from '../constants';
import { Point } from './Point';

interface PlanetProps {
  diameter: number;
  planetKey: PlanetKey;
  degree: { abs: number; rel: number };
  signKey: SignKey;
}

export const Planet: React.FC<PlanetProps> = ({
  diameter,
  planetKey,
  degree,
  signKey,
}) => {
  return (
    <Point radius={20 - (diameter / 2)} degree={degree.abs}>
      <text textAnchor="middle" fontSize={14} fill="#222">
        {PLANETS[planetKey].symbol}
      </text>
    </Point>
  );
};
