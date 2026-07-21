import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: ".env.dev" });

const envSchema = z.object({
  WEATHER_KEY: z.string(),
  PHONES: z.string(),
  LOCALIZATIONS: z.string()
});

const _env = envSchema.parse(process.env);

export const env = {
  weatherKey: _env.WEATHER_KEY,
  phones: _env.PHONES.split(","),
  locs: _env.LOCALIZATIONS.split(",")
};