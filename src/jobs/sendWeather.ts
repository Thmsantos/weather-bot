import cron from "node-cron";
import { env } from "../config/env";
import { formatTime, getToday } from "../utils/utils";
import { Job } from "./interface/job";
import pino from "pino";
import { getWeather, rainChance, whatsApp } from "../service";

class StartWeatherJob implements Job{
  private logger: pino.Logger<never, boolean>;

  private locs: string[];

  constructor(
    logger: pino.Logger<never, boolean>,
    locs: string[]
  ){
    this.logger = logger,
    this.locs = locs
  }

  public async run(): Promise<void>{
    cron.schedule("0 5 * * *", async () => {
      try {
        this.logger.info("Executing weather job...");
  
        const weathers = await Promise.all(
          this.locs.map(async (loc) => {
            const rainProbability = await rainChance.execute(loc); 
            return getWeather.execute(loc, rainProbability)
          })
        );
  
       const message = `📊 *Previsão do Tempo - ${getToday()}\n` + weathers.map((w) => {
          return `
          🌤️ - ${w.city}
          🌡️ - Temp: ${w.temp}°C (sensação ${w.feelsLike}°C)
          🔻 - Min: ${w.min}°C | 🔺 Max: ${w.max}°C
          🌧️ - Chuva: ${w.rainChance}%
          💧 - Umidade: ${w.humidity}%
          💨 - Vento: ${w.wind} m/s
          🌅 - Nascer: ${formatTime(w.sunrise)}
          🌇 - Pôr: ${formatTime(w.sunset)}
          📝 - Descrição do tempo: ${w.description}
          `;
        }).join("\n\n");
  
        const phones = env.phones!;
  
        phones.forEach(async (phone) => {
          await whatsApp.execute(phone, message)
        })
  
        this.logger.info("message sent!");
      } catch (err) {
        this.logger.error(err);
      }
    });
  }
}

export default StartWeatherJob;