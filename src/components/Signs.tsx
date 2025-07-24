import React from 'react';
import { ArcSegment } from './ArcSegment';
import { ELEMENTS, PALETTE, SIGNS, SIGNS_DRAW_ORDER } from '../constants';
import { Point } from './Point';

interface SignsProps {
  diameter: number;
  thickness?: number;
  fill?: string;
  stroke?: string;
}

export const Signs: React.FC<SignsProps> = ({
  diameter,
  thickness = 20,
  fill = 'none',
  stroke = 'none',
}) => {
  const radius = (diameter / 2) - 60;
  return (
    <g>
      {SIGNS_DRAW_ORDER.map((signKey, index) => {
        const sign = SIGNS[signKey];
        const currentDegree = index * 30
        console.log(currentDegree, sign.key)
        return (
          <>
            <ArcSegment
              id={sign.key}
              radius={radius}
              thickness={thickness}
              startDegree={currentDegree}
              endDegree={currentDegree + 30}
              fill={fill}
              stroke={stroke}
            />
            <Point radius={radius - 10} degree={currentDegree + 15}>
              <text transform="translate(0, 4)" textAnchor="middle" fontSize={10} fill="#222">
                {sign.symbol}
              </text>
            </Point>
          </>
        )
      })}
    </g >
  );
}; 
