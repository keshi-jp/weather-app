"use server";

import { WEATHER_API_KEY } from "./env";
import { WeatherType } from "./types";

export async function fetchWeather(): Promise<WeatherType> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=35.68&lon=139.76&appid=${WEATHER_API_KEY}&units=metric&lang=ja`
  );
  const weatherData = await res.json();
  return weatherData;
}
