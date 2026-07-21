import { Client, LocalAuth } from "whatsapp-web.js";
import RainChance from "./forecast";
import GetWeather from "./weather";
import WhatsApp from "./whatsapp";
import { client } from "../utils/utils";

const rainChance = new RainChance();

const getWeather = new GetWeather();

const whatsApp = new WhatsApp(client)

export { rainChance, getWeather, whatsApp };