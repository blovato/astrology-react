import { SIGNS_DRAW_ORDER } from "./constants";

export const toRadians = (degree: number) => (180 - degree) * (Math.PI / 180);

export function polarToCartesian(r: number, degree: number, cx = 0, cy = 0) {
  const radian = toRadians(degree);
  const result = {
    x: cx + r * Math.cos(radian),
    y: cy + r * Math.sin(radian),
  };
  return result;
}

export function getAbsoluteDegree(sign: string, degree: number): number {
  const index = SIGNS_DRAW_ORDER.findIndex(s => s.toLowerCase() === sign.toLowerCase());
  if (index === -1) throw new Error(`Invalid zodiac sign: ${sign}`);
  if (degree < 0 || degree >= 30) throw new Error(`Degree must be between 0 and 29.999 (got ${degree})`);

  return index * 30 + degree;
}