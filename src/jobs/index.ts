import { env } from "../config/env";
import { logger } from "../utils/utils";
import StartWeatherJob from "./sendWeather";

const sendWeather = new StartWeatherJob(
    logger,
    env.locs!
);

export { sendWeather };