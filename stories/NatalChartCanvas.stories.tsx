import type { Meta, StoryObj } from '@storybook/react-vite';
import { PALETTE, PLANETS, SIGNS } from '../src/constants';
import { NatalChartData } from '../src/types';
import { NatalChartCanvas } from '../src/components/NatalChartCanvas';
import { Planet } from '../src/components/Planet';
import { Signs } from '../src/components/Signs';

const mockChartData: NatalChartData = {
  planets: [
    { planetKey: PLANETS.sun.key, degree: { abs: 280, rel: 10 }, signKey: SIGNS.pisces.key, house: 1 },
    { planetKey: PLANETS.moon.key, degree: { abs: 82, rel: 22 }, signKey: SIGNS.taurus.key, house: 5 },
    { planetKey: PLANETS.mercury.key, degree: { abs: 305, rel: 5 }, signKey: SIGNS.aquarius.key, house: 2 },
    { planetKey: PLANETS.venus.key, degree: { abs: 345, rel: 15 }, signKey: SIGNS.pisces.key, house: 3 },
    { planetKey: PLANETS.mars.key, degree: { abs: 28, rel: 28 }, signKey: SIGNS.aries.key, house: 4 },
    { planetKey: PLANETS.jupiter.key, degree: { abs: 123, rel: 3 }, signKey: SIGNS.leo.key, house: 7 },
    { planetKey: PLANETS.saturn.key, degree: { abs: 169, rel: 19 }, signKey: SIGNS.virgo.key, house: 8 },
    { planetKey: PLANETS.uranus.key, degree: { abs: 217, rel: 7 }, signKey: SIGNS.scorpio.key, house: 9 },
    { planetKey: PLANETS.neptune.key, degree: { abs: 252, rel: 12 }, signKey: SIGNS.sagittarius.key, house: 10 },
    { planetKey: PLANETS.pluto.key, degree: { abs: 205, rel: 25 }, signKey: SIGNS.libra.key, house: 11 },
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
        <Planet
          diameter={args.diameter || 600}
          planetKey={planet.planetKey}
          degree={planet.degree}
          signKey={planet.signKey}
        />
      ))}
      <Signs diameter={args.diameter || 600} stroke={PALETTE.ocean} />
    </NatalChartCanvas>
  ),
  args: {
    diameter: 600,
  },
};
