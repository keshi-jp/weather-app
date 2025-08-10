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
    return <p className="flex items-center justify-center">読み込み中</p>;
  }

  return (
    <section>
      <h1 className="text-center mt-10">お天気アプリ</h1>
      <div className="px-10">
        <h2 className="mt-5">{weather.city.name}</h2>
        <h3>{weather.list[0].dt_txt} ～ </h3>
        <p>温度 {weather.list[0].main.temp.toFixed(1)}℃</p>
        <p>湿度 {weather.list[0].main.humidity}%</p>
      </div>
    </section>
  );
}
