"use server";

import { WEATHER_API_KEY } from "../env";

export async function getCityData(selectedCity: string) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${selectedCity},JP&limit=1&appid=${WEATHER_API_KEY}`
  );
  const cityData = await res.json();
  return cityData;
}
