import React from 'react';
import { PLANETS, PALETTE } from '../constants';
import { Point } from './Point';
import { PlanetPosition } from '../types';
import { Line } from './Line';

interface PlanetProps extends PlanetPosition {
  diameter: number;
}

export const Planet: React.FC<PlanetProps> = ({
  diameter,
  planetKey,
  degree,
  ring = 0,
}) => {
  const radius = ((diameter / 2) - 90) - (ring * 30);
  return (
    <g>
      <Line
        degree={degree.abs}
        fromRadius={radius + 10}
        toRadius={(diameter / 2) - 40 /* TODO: consider refs to signs arc edge */}
        stroke={PALETTE.mutedPlum}
      />
      <Point radius={radius} degree={degree.abs}>
        <text transform="translate(0, 2)" textAnchor="middle" dominantBaseline="middle" fill={PALETTE.mutedPlum} fontSize={32}>
          {PLANETS[planetKey].symbol}
        </text>
      </Point>
    </g>
  );
};
