"use client";
import { useEffect } from "react";
import { fetchWeather } from "./fetch-weather";

export default function Home() {
  useEffect(() => {
    async function load() {
      const data = await fetchWeather();
      console.log(data);
    }
    load();
  }, []);

  return (
    <>
    </>
  );
}
