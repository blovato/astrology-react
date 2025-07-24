import { PlanetKey, SignKey } from "./constants";

export interface PlanetPosition {
  planetKey: PlanetKey;
  degree: { abs: number, rel: number };
  signKey: SignKey;
  house: number;
}

export interface NatalChartData {
  planets: PlanetPosition[];
}