import pino from "pino";
import { Client, LocalAuth } from "whatsapp-web.js";

function formatTime(unix: number) {
  return new Date(unix * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}

function getToday() {
  return new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });
}

const logger = pino();

const client =  new Client({ authStrategy: new LocalAuth() })


export { formatTime, getToday, logger, client };