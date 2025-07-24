import React from 'react';

interface House {
  number: number;
  cuspAbsDegree: number;
  endAbsDegree: number;
  cuspSignKey: string;
  endSignKey: string;
}

interface HousesProps {
  houses: House[];
  r?: number;
  cx?: number;
  cy?: number;
}

export const Houses: React.FC<HousesProps> = ({ houses, r = 170, cx = 200, cy = 200 }) => {
  return (
    <g>
      {houses.map((house) => {
        const angle = ((house.cuspAbsDegree - 90) * Math.PI) / 180;
        const x2 = cx + r * Math.cos(angle);
        const y2 = cy + r * Math.sin(angle);
        return (
          <g key={house.number}>
            {/* House cusp line */}
            <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="#888" strokeWidth={2} />
            {/* House number label */}
            <text x={cx + (r + 20) * Math.cos(angle)} y={cy + (r + 20) * Math.sin(angle)} textAnchor="middle" fontSize={12} fill="#444">
              {house.number}
            </text>
          </g>
        );
      })}
    </g>
  );
}; 