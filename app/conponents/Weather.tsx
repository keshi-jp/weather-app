import { WeatherType } from "../types";

interface Props {
  weather: WeatherType;
}

export default function Weather({ weather }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-x-auto snap-x snap-mandatory lg:justify-center">
      {weather.list.slice(0, 7).map((item, i) => (
        <div
          key={i}
          className="bg-white/70 rounded-xl p-4 shadow-md flex-shrink-0 w-32 text-center snap-center transition-opacity duration-300 animate-fade-in"
          style={{ animationDelay: `${i * 100}ms` }}
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
          <p className="text-sm text-gray-600">{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}