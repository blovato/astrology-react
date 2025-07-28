import { PlanetKey, SignKey } from "./constants";

export interface InputPlanetPosition {
  planetKey: PlanetKey;
  signKey: SignKey;
  degree: number; // relative to the sign
  house: number;
}

export interface InputNatalChart {
  planets: InputPlanetPosition[];
}

export interface PlanetPosition {
  planetKey: PlanetKey;
  signKey: SignKey;
  degree: { abs: number, rel: number };
  house: number;
  ring?: number;
}

export interface NatalChart {
  planets: PlanetPosition[];
}