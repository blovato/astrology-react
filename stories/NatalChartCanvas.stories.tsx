import type { Meta, StoryObj } from '@storybook/react-vite';
import { PALETTE, PLANETS, SIGNS } from '../src/constants';
import { NatalChartData } from '../src/types';
import { NatalChartCanvas } from '../src/components/NatalChartCanvas';
import { Planet } from '../src/components/Planet';
import { Signs } from '../src/components/Signs';

const mockChartData: NatalChartData = {
  planets: [
    {
      planetKey: PLANETS.sun.key,
      degree: { abs: 354.8833, rel: 24.8833 },
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.moon.key,
      degree: { abs: 32.3667, rel: 2.3667 },
      signKey: SIGNS.taurus.key,
      house: 12,
    },
    {
      planetKey: PLANETS.mercury.key,
      degree: { abs: 327.4667, rel: 27.4667 },
      signKey: SIGNS.aquarius.key,
      house: 10,
    },
    {
      planetKey: PLANETS.venus.key,
      degree: { abs: 8.85, rel: 8.85 },
      signKey: SIGNS.aries.key,
      house: 11,
    },
    {
      planetKey: PLANETS.mars.key,
      degree: { abs: 336.4833, rel: 6.4833 },
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.saturn.key,
      degree: { abs: 335.4833, rel: 5.4833 },
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.jupiter.key,
      degree: { abs: 224.2833, rel: 14.2833 },
      signKey: SIGNS.scorpio.key,
      house: 6,
    },
    {
      planetKey: PLANETS.uranus.key,
      degree: { abs: 295.4667, rel: 25.4667 },
      signKey: SIGNS.capricorn.key,
      house: 9,
    },
    {
      planetKey: PLANETS.neptune.key,
      degree: { abs: 292.8833, rel: 22.8833 },
      signKey: SIGNS.capricorn.key,
      house: 9,
    },
    {
      planetKey: PLANETS.pluto.key,
      degree: { abs: 238, rel: 28 },
      signKey: SIGNS.scorpio.key,
      house: 7,
    },
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
          absDegree={planet.degree.abs}
        />
      ))}
      <Signs diameter={args.diameter || 600} stroke={PALETTE.ocean} />
    </NatalChartCanvas>
  ),
  args: {
    diameter: 600,
  },
};
