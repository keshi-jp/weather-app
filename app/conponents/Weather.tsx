import { useState } from "react";
import getClosestHourIndex from "../getClosestForecastIndex";
import { WeatherType } from "../types/weatherType";
import WeatherDetail from "./WeatherDetail";

interface Props {
  weather: WeatherType;
}

export default function Weather({ weather }: Props) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const startIndex = getClosestHourIndex(weather);

  if (selectedItem !== null) {
    return (
      <WeatherDetail
        weather={weather}
        index={selectedItem + startIndex}
        onBack={() => setSelectedItem(null)}
      />
    );
  }

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-4 lg:justify-center lg:flex-nowrap lg:">
      {weather.list.slice(startIndex, 7 + startIndex).map((item, i) => (
        <div
          key={i}
          className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 shadow-md flex-shrink-0 w-32 text-center snap-center transition-opacity duration-300 animate-fade-in"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <p className="text-sm text-gray-800 dark:text-gray-200">
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
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {item.main.temp.toFixed(1)}℃
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.weather[0].description}
          </p>
          <button
            onClick={() => setSelectedItem(i)}
            className="mt-3 px-3 py-1 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-lg shadow-sm hover:bg-white hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
          >
            詳細表示
          </button>
        </div>
      ))}
    </div>
  );
}
