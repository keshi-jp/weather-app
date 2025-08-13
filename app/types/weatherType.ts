interface WeatherType {
  city: {
    name: string;
  };

  list: Array<{
    dt_txt: string;

    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };

    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

export type { WeatherType };
