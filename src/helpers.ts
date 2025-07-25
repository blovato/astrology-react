export const toRadians = (degree: number) => (180 - degree) * (Math.PI / 180);

export function polarToCartesian(r: number, degree: number, cx = 0, cy = 0) {
  const radian = toRadians(degree);
  const result = {
    x: cx + r * Math.cos(radian),
    y: cy + r * Math.sin(radian),
  };
  return result;
}
