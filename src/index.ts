import "dotenv/config";
import { sendWeather } from "./jobs";
import { client } from "./utils/utils";

async function main() {
  client.on("ready", () => {
    console.log("configured whatsapp!");
    sendWeather.run();
  });

  client.initialize();
}

main();