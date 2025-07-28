import { PlanetPosition } from "../types";

export function useConjunctionLayout(items: PlanetPosition[], {
  collisionPadding = 8, // in degrees
  maxRingDepth = 3,
}: {
  collisionPadding?: number;
  maxRingDepth?: number;
} = {}): PlanetPosition[] {
  const placed: PlanetPosition[] = [];

  items
    .sort((a, b) => a.degree.abs - b.degree.abs)
    .forEach(item => {
      let assigned = false;
      for (let ring = 0; ring <= maxRingDepth; ring++) {
        const conflict = placed.some(p =>
          p.ring === ring &&
          Math.abs(((p.degree.abs - item.degree.abs + 180 + 360) % 360) - 180) < collisionPadding
        );
        if (!conflict) {
          placed.push({ ...item, ring });
          assigned = true;
          break;
        }
      }
      if (!assigned) {
        placed.push({ ...item, ring: maxRingDepth + 1 });
      }
    });

  // Sort by ring, in order to draw the planets from the inner to the outer ring
  return placed.sort((a, b) => (b.ring || 0) - (a.ring || 0));
}
