export const ELEMENTS = {
  fire: 'fire',
  earth: 'earth',
  air: 'air',
  water: 'water',
} as const;

export const PLANETS = {
  sun: {
    key: 'sun',
    symbol: '\u2609',
  },
  moon: {
    key: 'moon',
    symbol: '\u263D',
  },
  mercury: {
    key: 'mercury',
    symbol: '\u263F',
  },
  venus: {
    key: 'venus',
    symbol: '\u2640',
  },
  mars: {
    key: 'mars',
    symbol: '\u2642',
  },
  jupiter: {
    key: 'jupiter',
    symbol: '\u2643',
  },
  saturn: {
    key: 'saturn',
    symbol: '\u2644',
  },
  uranus: {
    key: 'uranus',
    symbol: '\u2645',
  },
  neptune: {
    key: 'neptune',
    symbol: '\u2646',
  },
  pluto: {
    key: 'pluto',
    symbol: '\u2647',
  },
  // Add more if needed
} as const;

export type PlanetKey = keyof typeof PLANETS;
export type Planet = (typeof PLANETS)[PlanetKey];

export const SIGNS = {
  aries: {
    key: 'aries',
    symbol: '\u2648',
    order: 1,
    element: ELEMENTS.fire,
  },
  taurus: {
    key: 'taurus',
    symbol: '\u2649',
    order: 2,
    element: ELEMENTS.earth,
  },
  gemini: {
    key: 'gemini',
    symbol: '\u264A',
    order: 3,
    element: ELEMENTS.air,
  },
  cancer: {
    key: 'cancer',
    symbol: '\u264B',
    order: 4,
    element: ELEMENTS.water,
  },
  leo: {
    key: 'leo',
    symbol: '\u264C',
    order: 5,
    element: ELEMENTS.fire,
  },
  virgo: {
    key: 'virgo',
    symbol: '\u264D',
    order: 6,
    element: ELEMENTS.earth,
  },
  libra: {
    key: 'libra',
    symbol: '\u264E',
    order: 7,
    element: ELEMENTS.air,
  },
  scorpio: {
    key: 'scorpio',
    symbol: '\u264F',
    order: 8,
    element: ELEMENTS.water,
  },
  sagittarius: {
    key: 'sagittarius',
    symbol: '\u2650',
    order: 9,
    element: ELEMENTS.fire,
  },
  capricorn: {
    key: 'capricorn',
    symbol: '\u2651',
    order: 10,
    element: ELEMENTS.earth,
  },
  aquarius: {
    key: 'aquarius',
    symbol: '\u2652',
    order: 11,
    element: ELEMENTS.air,
  },
  pisces: {
    key: 'pisces',
    symbol: '\u2653',
    order: 12,
    element: ELEMENTS.water,
  },
} as const;

export type SignKey = keyof typeof SIGNS;
export type Sign = (typeof SIGNS)[SignKey];

export const SIGNS_DRAW_ORDER = [
  SIGNS.aries.key,
  SIGNS.taurus.key,
  SIGNS.gemini.key,
  SIGNS.cancer.key,
  SIGNS.leo.key,
  SIGNS.virgo.key,
  SIGNS.libra.key,
  SIGNS.scorpio.key,
  SIGNS.sagittarius.key,
  SIGNS.capricorn.key,
  SIGNS.aquarius.key,
  SIGNS.pisces.key,
];

export const PALETTE = {
  macaroni: "#e1b670",      // warm yellow-orange #e1b670
  caramel: "#b96925",       // rich caramel brown #b96925
  cocoa: "#68392e",         // deep cocoa brown #68392e
  espresso: "#201300",      // very dark brown #201300
  olive: "#404e21",         // olive green #404e21
  jade: "#45944f",          // jade green #45944f
  mint: "#77d3b2",          // mint green #77d3b2
  sky: "#96bfff",           // sky blue #96bfff
  ocean: "#038ac2",         // ocean blue #038ac2
  teal: "#01515e",          // deep teal #01515e
  midnight: "#001437",      // midnight blue #001437
  plum: "#503e66",          // plum purple #503e66
  orchid: "#a762a9",        // orchid purple #a762a9
  blush: "#efa3c8",         // blush pink #efa3c8
  white: "#ffffff",         // pure white #ffffff
  black: "#000000",         // pure black #000000
} as const;