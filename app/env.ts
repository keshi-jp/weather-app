if (!process.env.WEATHER_API_KEY) {
  throw new Error("環境変数 WEATHER_API_KEY が定義されていません");
}

export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
