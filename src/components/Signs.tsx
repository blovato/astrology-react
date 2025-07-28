import React from 'react';
import { ArcSegment } from './ArcSegment';
import { PALETTE, SIGNS, SIGNS_DRAW_ORDER } from '../constants';
import { Point } from './Point';
import { renderSignSymbol } from './icons';

interface SignsProps {
  diameter: number;
  thickness?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}



export const Signs: React.FC<SignsProps> = ({
  diameter,
  thickness = 30,
  fill = 'none',
  stroke = 'none',
  strokeWidth = 'none',
}) => {
  const radius = (diameter / 2) - 30;
  return (
    <g>
      {SIGNS_DRAW_ORDER.map((signKey, index) => {
        const sign = SIGNS[signKey];
        const currentDegree = index * 30
        return (
          <g key={sign.key}>
            <ArcSegment
              id={sign.key}
              radius={radius}
              thickness={thickness}
              startDegree={currentDegree}
              endDegree={currentDegree + 30}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
            <Point radius={radius - 15} degree={currentDegree + 15}>
              {renderSignSymbol(sign.key)({ width: 24, height: 24, transform: `translate(-12, -12)`, fill: stroke })}
            </Point>
          </g>
        )
      })}
    </g >
  );
}; 
