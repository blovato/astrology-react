import { Meta, StoryObj } from '@storybook/react';
import { PLANETS, SIGNS, PlanetKey, SignKey } from '../constants';
import { useNatalChart, BirthData, NatalChartData } from '../hooks/useNatalChart';
import { NatalChartCanvas } from './NatalChartCanvas';
import { PlanetIcon } from './PlanetIcon';
import { HouseLabel } from './Houses';

const mockChartData: NatalChartData = {
  planets: [
    { name: 'sun', degree: 10, sign: 'capricorn', house: 1 },
    { name: 'moon', degree: 22, sign: 'gemini', house: 5 },
    { name: 'mercury', degree: 5, sign: 'aquarius', house: 2 },
  ],
  houses: [
    { number: 1, cuspDegree: 0, sign: 'capricorn' },
    { number: 2, cuspDegree: 30, sign: 'aquarius' },
    { number: 3, cuspDegree: 60, sign: 'pisces' },
  ],
};

const meta: Meta<typeof NatalChartCanvas> = {
  title: 'Astrology/NatalChartCanvas',
  component: NatalChartCanvas,
};
export default meta;
type Story = StoryObj<typeof NatalChartCanvas>;

export const WithIconsAndLabels: Story = {
  render: (args) => (
    <div>
      <NatalChartCanvas {...args} chartData={mockChartData} />
      <div style={{ marginTop: 16 }}>
        <h4>Planets</h4>
        {mockChartData.planets.map((planet) => (
          <span key={planet.name} style={{ marginRight: 8 }}>
            <PlanetIcon name={planet.name} /> {PLANETS[planet.name].name} in {SIGNS[planet.sign].name} (House {planet.house})
          </span>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <h4>Houses</h4>
        {mockChartData.houses.map((house) => (
          <HouseLabel key={house.number} number={house.number} sign={house.sign} />
        ))}
      </div>
    </div>
  ),
  args: {
    width: 400,
    height: 400,
  },
};
