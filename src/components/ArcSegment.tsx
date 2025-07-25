import React, { SVGProps } from 'react';
import { polarToCartesian, toRadians } from '../helpers'

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
  const { x: outerStartX, y: outerStartY } = polarToCartesian(radius, startDegree);
  const { x: outerEndX, y: outerEndY } = polarToCartesian(radius, endDegree);
  const innerRadius = radius - thickness;
  const { x: innerStartX, y: innerStartY } = polarToCartesian(innerRadius, endDegree);
  const { x: innerEndX, y: innerEndY } = polarToCartesian(innerRadius, startDegree);
  const largeArcFlag = endDegree - startDegree <= 180 ? "0" : "1";
  const sweepFlagOuter = "0"; // counter-clockwise
  const sweepFlagInner = "1"; // opposite direction for inner arc

  const d = `
    M ${outerStartX} ${outerStartY}
    A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlagOuter} ${outerEndX} ${outerEndY}
    L ${innerStartX} ${innerStartY}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} ${sweepFlagInner} ${innerEndX} ${innerEndY}
    Z
  `;

  return <path d={d}  {...svgPathProps} />;
}; 
