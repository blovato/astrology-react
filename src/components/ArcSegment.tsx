import React, { SVGProps } from 'react';
import { toRadians } from '../helpers'

type ArcSegmentProps = {
  radius: number;
  thickness: number;
  startDegree: number;
  endDegree: number;
} & SVGProps<SVGPathElement>

export const ArcSegment: React.FC<ArcSegmentProps> = ({
  radius,
  thickness,
  startDegree,
  endDegree,
  ...svgPathProps
}) => {
  const startRad = toRadians(startDegree);
  const endRad = toRadians(endDegree);

  const outerStartX = Math.cos(startRad) * radius;
  const outerStartY = Math.sin(startRad) * radius;
  const outerEndX = Math.cos(endRad) * radius;
  const outerEndY = Math.sin(endRad) * radius;

  const innerRadius = radius - thickness;
  const innerStartX = Math.cos(endRad) * innerRadius;
  const innerStartY = Math.sin(endRad) * innerRadius;
  const innerEndX = Math.cos(startRad) * innerRadius;
  const innerEndY = Math.sin(startRad) * innerRadius;

  const largeArcFlag = endDegree - startDegree <= 180 ? "0" : "1";

  const d = `
          M ${outerStartX} ${outerStartY}
          A ${radius} ${radius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
          L ${innerStartX} ${innerStartY}
          A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}
          Z
        `;

  return <path d={d}  {...svgPathProps} />;
}; 
