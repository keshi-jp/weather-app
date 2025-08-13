import { cities } from "../data/cities";
import { CitySelectorProps } from "../types/citySelectorType";

export default function CitySelector({ setSelectedCity }: CitySelectorProps) {
  const reset = cities.desc;

  const handleChenge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <select
      value={reset}
      onChange={handleChenge}
      className="mt-5 text-xl p-2 rounded-lg border border-gray-300 bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.entries(cities).map(([key, name]) => (
        <option key={key} value={key}>
          {name}
        </option>
      ))}
    </select>
  );
}
