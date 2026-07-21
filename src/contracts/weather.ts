import z from "zod";

const WeatherSchema = z.object({
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    humidity: z.number(),
  }),
  weather: z.array(
    z.object({
      description: z.string(),
      icon: z.string(),
    })
  ),
  wind: z.object({
    speed: z.number(),
  }),
  sys: z.object({
    sunrise: z.number(),
    sunset: z.number(),
  }),
  name: z.string(),
});

type WeatherResult = {
  city: string;
  temp: number;
  feelsLike: number;
  min: number;
  max: number;
  humidity: number;
  wind: number;
  description: string;
  icon: string;
  sunrise: number;
  sunset: number;
  rainChance: number;
};

export { WeatherSchema, WeatherResult }
