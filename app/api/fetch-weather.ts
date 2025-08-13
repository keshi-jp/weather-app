"use server";

import { WEATHER_API_KEY } from "../env";
import { WeatherType } from "../types/weatherType";

export async function fetchWeather(lat: number, lon: number): Promise<WeatherType> {

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=ja`
  );
  const weatherData = await res.json();
  return weatherData;
}
