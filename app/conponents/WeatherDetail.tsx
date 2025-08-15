import { WeatherType } from "../types/weatherType";

interface WeatherDetailProps {
  weather: WeatherType;
  index: number;
  onBack: () => void;
}

export default function WeatherDetail({ weather, index, onBack }: WeatherDetailProps) {
  return (
    <div
      className="mt-5 p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg max-w-sm mx-auto">
      
      <button
        onClick={onBack}
        className="mb-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← 戻る
      </button>
      <p className="text-gray-800 dark:text-gray-200">
        {new Date(weather.list[index].dt_txt).toLocaleString("ja-JP", {
          month: "short",
          day: "numeric",
          hour: "numeric",
        })}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.list[index].weather[0].icon}@2x.png`}
        alt={weather.list[index].weather[0].description}
        className="mx-auto"
      />
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {weather.list[index].main.temp.toFixed(1)}℃
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {weather.list[index].weather[0].description}
      </p>
      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        <p>体感温度: {weather.list[index].main.feels_like.toFixed(1)}℃</p>
        <p>最高気温: {weather.list[index].main.temp_max.toFixed(1)}℃</p>
        <p>最低気温: {weather.list[index].main.temp_min.toFixed(1)}℃</p>
        <p>湿度: {weather.list[index].main.humidity}%</p>
        <p>気圧: {weather.list[index].main.pressure} hPa</p>
        <p>風速: {weather.list[index].wind.speed} m/s</p>
      </div>
    </div>
  );
}
