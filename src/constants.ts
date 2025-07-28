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
  white: "#ffffff",            // #ffffff
  black: "#000000",            // #000000
  navyBlue: "#203c56",         // #203c56
  deepPurple: "#544e68",       // #544e68
  mutedPlum: "#8d697a",        // #8d697a
  orange: "#ffaa5e",     // #ffaa5e
  paleYellow: "#ffd4a3",       // #ffd4a3
  cream: "#ffecd6",  // #ffecd6
} as const;