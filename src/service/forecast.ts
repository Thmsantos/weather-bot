import axios from "axios";
import { ForecastSchema } from "../contracts/forecast";
import { env } from "../config/env";
import { Service } from "./interface/service";

class RainChance implements Service<number>{
    public async execute(city: string){
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${env.weatherKey}&units=metric&lang=pt_br`
        );

        const data = ForecastSchema.parse(res.data);
        const next = data.list.slice(0, 3);
        const maxPop = Math.max(...next.map((i) => i.pop));
        return Math.round(maxPop * 100);
    }
}

export default RainChance;