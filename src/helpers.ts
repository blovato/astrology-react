export const toRadians = (degree: number) => (degree + 180) * (Math.PI / 180);

export function polarToCartesian(r: number, degree: number, cx = 0, cy = 0) {
  const radian = toRadians(degree); // 0° is at the right, counterclockwise
  return {
    x: cx + r * Math.cos(radian),
    y: cy + r * Math.sin(radian),
  };
}
