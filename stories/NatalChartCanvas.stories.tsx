import type { Meta, StoryObj } from '@storybook/react-vite';
import { PALETTE, PLANETS, SIGNS } from '../src/constants';
import { InputNatalChart } from '../src/types';
import { NatalChartCanvas } from '../src/components/NatalChartCanvas';
import { Planet } from '../src/components/Planet';
import { Signs } from '../src/components/Signs';
import { useNatalChart } from '../src/hooks/useNatalChart';

const mockChartData: InputNatalChart = {
  planets: [
    {
      planetKey: PLANETS.sun.key,
      degree: 24.8833,
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.moon.key,
      degree: 2.3667,
      signKey: SIGNS.taurus.key,
      house: 12,
    },
    {
      planetKey: PLANETS.mercury.key,
      degree: 27.4667,
      signKey: SIGNS.aquarius.key,
      house: 10,
    },
    {
      planetKey: PLANETS.venus.key,
      degree: 8.85,
      signKey: SIGNS.aries.key,
      house: 11,
    },
    {
      planetKey: PLANETS.mars.key,
      degree: 6.4833,
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.saturn.key,
      degree: 5.4833,
      signKey: SIGNS.pisces.key,
      house: 11,
    },
    {
      planetKey: PLANETS.jupiter.key,
      degree: 14.2833,
      signKey: SIGNS.scorpio.key,
      house: 6,
    },
    {
      planetKey: PLANETS.uranus.key,
      degree: 25.4667,
      signKey: SIGNS.capricorn.key,
      house: 9,
    },
    {
      planetKey: PLANETS.neptune.key,
      degree: 22.8833,
      signKey: SIGNS.capricorn.key,
      house: 9,
    },
    {
      planetKey: PLANETS.pluto.key,
      degree: 28,
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
  render: (args) => {
    const { planets } = useNatalChart(mockChartData);
    return (
      <NatalChartCanvas {...args}>
        {planets.map((planet) => (
          <Planet
            key={planet.planetKey}
            diameter={args.diameter || 600}
            {...planet}
          />
        ))}
        <Signs diameter={args.diameter || 600} fill={PALETTE.cream} stroke={PALETTE.orange} strokeWidth={1} />
      </NatalChartCanvas>
    )
  },
  args: {
    diameter: 600,
  },
};
