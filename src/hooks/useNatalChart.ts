import { useMemo } from "react";
import { InputNatalChart, InputPlanetPosition, NatalChart, PlanetPosition } from "../types";
import { getAbsoluteDegree } from "../helpers";
import { useConjunctionLayout } from "./useConjunctionLayout";

export const useNatalChart = (natalChartData: InputNatalChart): NatalChart => {
  // Calculate planets with absolute degrees
  const planetsWithAbsDegrees: PlanetPosition[] = useMemo(() => (natalChartData?.planets || []).map(
    (planet: InputPlanetPosition) => ({
      ...planet,
      degree: {
        abs: getAbsoluteDegree(planet.signKey, planet.degree),
        rel: planet.degree,
      },
    })
  ), [natalChartData]);

  // Apply conjunction layout
  const planets = useConjunctionLayout(planetsWithAbsDegrees);

  return { planets };
};