import { PlanetKey, SignKey } from "./constants";

export interface PlanetPosition {
  planetKey: PlanetKey;
  degree: { abs: number, rel: number };
  signKey: SignKey;
  house: number;
}

export interface HousePosition {
  number: number;
  cuspAbsDegree: number;
  endAbsDegree: number;
  cuspSignKey: SignKey;
  endSignKey: SignKey;
  interceptedSignKey?: SignKey;
}

export interface NatalChartData {
  planets: PlanetPosition[];
  houses: HousePosition[];
  // Add aspects, angles, etc. as needed
}