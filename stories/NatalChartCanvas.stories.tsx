import type { Meta, StoryObj } from '@storybook/react-vite';
import { PLANETS, SIGNS } from '../src/constants';
import { NatalChartData } from '../src/types';
import { NatalChartCanvas } from '../src/components/NatalChartCanvas';
import { Planet } from '../src/components/Planet';
import { Houses } from '../src/components/Houses';

const mockChartData: NatalChartData = {
  planets: [
    { planetKey: PLANETS.sun.key, degree: { abs: 280, rel: 10 }, signKey: SIGNS.capricorn.key, house: 1 },
    { planetKey: PLANETS.moon.key, degree: { abs: 82, rel: 22 }, signKey: SIGNS.gemini.key, house: 5 },
    { planetKey: PLANETS.mercury.key, degree: { abs: 305, rel: 5 }, signKey: SIGNS.aquarius.key, house: 2 },
    { planetKey: PLANETS.venus.key, degree: { abs: 345, rel: 15 }, signKey: SIGNS.pisces.key, house: 3 },
    { planetKey: PLANETS.mars.key, degree: { abs: 28, rel: 28 }, signKey: SIGNS.aries.key, house: 4 },
    { planetKey: PLANETS.jupiter.key, degree: { abs: 123, rel: 3 }, signKey: SIGNS.leo.key, house: 7 },
    { planetKey: PLANETS.saturn.key, degree: { abs: 169, rel: 19 }, signKey: SIGNS.virgo.key, house: 8 },
    { planetKey: PLANETS.uranus.key, degree: { abs: 217, rel: 7 }, signKey: SIGNS.scorpio.key, house: 9 },
    { planetKey: PLANETS.neptune.key, degree: { abs: 252, rel: 12 }, signKey: SIGNS.sagittarius.key, house: 10 },
    { planetKey: PLANETS.pluto.key, degree: { abs: 205, rel: 25 }, signKey: SIGNS.libra.key, house: 11 },
  ],
  houses: [ // Whole sign houses
    { number: 1, cuspAbsDegree: 0, endAbsDegree: 30, cuspSignKey: SIGNS.capricorn.key, endSignKey: SIGNS.aquarius.key },
    { number: 2, cuspAbsDegree: 30, endAbsDegree: 60, cuspSignKey: SIGNS.aquarius.key, endSignKey: SIGNS.pisces.key },
    { number: 3, cuspAbsDegree: 60, endAbsDegree: 90, cuspSignKey: SIGNS.pisces.key, endSignKey: SIGNS.aries.key },
    { number: 4, cuspAbsDegree: 90, endAbsDegree: 120, cuspSignKey: SIGNS.aries.key, endSignKey: SIGNS.taurus.key },
    { number: 5, cuspAbsDegree: 120, endAbsDegree: 150, cuspSignKey: SIGNS.taurus.key, endSignKey: SIGNS.gemini.key },
    { number: 6, cuspAbsDegree: 150, endAbsDegree: 180, cuspSignKey: SIGNS.gemini.key, endSignKey: SIGNS.cancer.key },
    { number: 7, cuspAbsDegree: 180, endAbsDegree: 210, cuspSignKey: SIGNS.cancer.key, endSignKey: SIGNS.leo.key },
    { number: 8, cuspAbsDegree: 210, endAbsDegree: 240, cuspSignKey: SIGNS.leo.key, endSignKey: SIGNS.virgo.key },
    { number: 9, cuspAbsDegree: 240, endAbsDegree: 270, cuspSignKey: SIGNS.virgo.key, endSignKey: SIGNS.libra.key },
    { number: 10, cuspAbsDegree: 270, endAbsDegree: 300, cuspSignKey: SIGNS.libra.key, endSignKey: SIGNS.scorpio.key },
    { number: 11, cuspAbsDegree: 300, endAbsDegree: 330, cuspSignKey: SIGNS.scorpio.key, endSignKey: SIGNS.sagittarius.key },
    { number: 12, cuspAbsDegree: 330, endAbsDegree: 360, cuspSignKey: SIGNS.sagittarius.key, endSignKey: SIGNS.capricorn.key },
  ],
};

const meta: Meta<typeof NatalChartCanvas> = {
  title: 'Astrology/NatalChartCanvas',
  component: NatalChartCanvas,
};
export default meta;
type Story = StoryObj<typeof NatalChartCanvas>;

export const Default: Story = {
  render: (args) => (
    <NatalChartCanvas {...args}>
      {mockChartData.planets.map((planet) => (
        <Planet planetKey={planet.planetKey} degree={planet.degree} signKey={planet.signKey} house={planet.house} />
      ))}
      <Houses houses={mockChartData.houses} />
    </NatalChartCanvas>
  ),
  args: {
    width: 400,
    height: 400,
  },
};