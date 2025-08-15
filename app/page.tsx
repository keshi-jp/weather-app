"use client";
import { useEffect, useState } from "react";
import { fetchWeather } from "./api/fetch-weather";
import { WeatherType } from "./types/weatherType";
import Weather from "./conponents/Weather";
import CitySelector from "./conponents/CitySelector";
import { cities } from "./data/cities";
import { getCityData } from "./api/geo-coordinates";

export default function Home() {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>(
    Object.entries(cities)[1][0]
  );

  useEffect(() => {
    async function load() {
      try {
        const cityDataArray = await getCityData(selectedCity);
        const cityData = cityDataArray[0];
        console.log(cityData);
        const lat = cityData.lat;
        const lon = cityData.lon;
        const weatherData = await fetchWeather(lat, lon);
        setWeather(weatherData);
        console.log(weatherData);
      } catch (e) {
        setError("天気情報の取得に失敗しました");
      }
    }
    load();
  }, [selectedCity]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300">
        <p className="text-white text-lg">{error}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300">
        <p className="text-white text-lg animate-pulse">天気を取得中…</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col items-center">
      <h1 className="text-center mt-10 text-3xl font-bold text-gray-800 dark:text-white">
        天気予報
      </h1>
      <div className="w-full max-w-5xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-0">
        <h2 className="mt-5 text-2xl text-gray-800 dark:text-white">
          {cities[selectedCity]}
        </h2>
        <CitySelector setSelectedCity={setSelectedCity} />
        <Weather weather={weather} />
      </div>
    </section>
  );
}
