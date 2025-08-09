"use server";

import { WEATHER_API_KEY } from "./env";

interface WEATHER {
  url: string;
}

export async function fetchWeather(): Promise<WEATHER> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=35.68&lon=139.76&appid=${WEATHER_API_KEY}`
  );
  const weatherData = await res.json();
  return weatherData;
}
