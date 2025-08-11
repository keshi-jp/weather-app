"use client";
import { useEffect, useState } from "react";
import { fetchWeather } from "./fetch-weather";
import { WEATHER } from "./types";

export default function Home() {
  const [weather, setWeather] = useState<WEATHER | null>(null);
  useEffect(() => {
    async function load() {
      const data = await fetchWeather();
      setWeather(data);
      console.log(data);
    }
    load();
  }, []);

  if (!weather) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300">
        <p className="text-white text-lg animate-pulse">天気を取得中…</p>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-center mt-10">天気予報</h1>
      <div className="px-10">
        <h2 className="mt-5">{weather.city.name}</h2>
        <div className="flex gap-4 overflow-x-auto mt-5">
          {weather.list.slice(0, 7).map((item, i) => (
            <div
              key={i}
              className="bg-white/70 rounded-xl p-4 shadow-md flex-shrink-0 w-32 text-center"
            >
              <p className="text-sm">
                {new Date(item.dt_txt).toLocaleString("ja-JP", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="mx-auto"
              />
              <p className="text-lg font-bold">{item.main.temp.toFixed(1)}℃</p>
              <p className="text-sm text-gray-600">
                {item.weather[0].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
