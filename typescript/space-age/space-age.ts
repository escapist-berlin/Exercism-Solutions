interface OrbitalPeriodMap {
  [key: string]: number;
}

const orbitalPeriodMap: OrbitalPeriodMap = {
  'Mercury': 0.2408467,
  'Venus': 0.61519726,
  'Earth': 1.0,
  'Mars': 1.8808158,
  'Jupiter': 11.862615,
  'Saturn': 29.447498,
  'Uranus': 84.016846,
  'Neptune': 164.79132,
}

export function age(planet: string, seconds: number): number {
  const orbitalPeriod = orbitalPeriodMap[planet.charAt(0).toUpperCase() + planet.slice(1)];
  const yearInSeconds = 31557600 * orbitalPeriod;

  return Math.round((seconds / yearInSeconds) * 100) / 100;
}
