import axios from "axios";
import { env } from "../config/env";
import { WeatherResult, WeatherSchema } from "../contracts/weather";
import { Service } from "./interface/service";

class GetWeather implements Service<WeatherResult>{
  public async execute(city: string, rainChance: number){
    const weatherRes =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.weatherKey}&units=metric&lang=pt_br`)

    const data = WeatherSchema.parse(weatherRes.data);

    return {
      city: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      rainChance,
    };
  }
}



export default GetWeather;