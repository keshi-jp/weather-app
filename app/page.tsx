"use client";
import { useEffect, useState } from "react";
import { fetchWeather } from "./fetch-weather";
import { WeatherType } from "./types";
import Weather from "./conponents/Weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchWeather();
        setWeather(data);
        console.log(data);
      } catch (e) {
        setError("天気情報の取得に失敗しました");
      }
    }
    load();
  }, []);

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
    <section className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300 flex flex-col items-center">
      <h1 className="text-center mt-10 text-3xl font-bold text-white">天気予報</h1>
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mt-5 text-2xl text-white">{weather.city.name}</h2>
        <div className="mt-5">
          <Weather weather={weather} />
        </div>
      </div>
    </section>
  );
}
