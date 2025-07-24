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
  },
  taurus: {
    key: 'taurus',
    symbol: '\u2649',
    order: 2,
  },
  gemini: {
    key: 'gemini',
    symbol: '\u264A',
    order: 3,
  },
  cancer: {
    key: 'cancer',
    symbol: '\u264B',
    order: 4,
  },
  leo: {
    key: 'leo',
    symbol: '\u264C',
    order: 5,
  },
  virgo: {
    key: 'virgo',
    symbol: '\u264D',
    order: 6,
  },
  libra: {
    key: 'libra',
    symbol: '\u264E',
    order: 7,
  },
  scorpio: {
    key: 'scorpio',
    symbol: '\u264F',
    order: 8,
  },
  sagittarius: {
    key: 'sagittarius',
    symbol: '\u2650',
    order: 9,
  },
  capricorn: {
    key: 'capricorn',
    symbol: '\u2651',
    order: 10,
  },
  aquarius: {
    key: 'aquarius',
    symbol: '\u2652',
    order: 11,
  },
  pisces: {
    key: 'pisces',
    symbol: '\u2653',
    order: 12,
  },
} as const;

export type SignKey = keyof typeof SIGNS;
export type Sign = (typeof SIGNS)[SignKey]; 