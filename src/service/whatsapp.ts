import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { Service } from "./interface/service";

class WhatsApp implements Service<void>{
  private client: Client;

  constructor(client: Client){
    this.client = client;
  }

  public async execute(phone: string, message: string){
    this.client.on("qr", (qr) => {
      console.log("scan the qrcode:");
      qrcode.generate(qr, { small: true });
    });

    this.client.on("ready", () => {
      console.log("whatsApp is ready!");
    });

    const formatted = `${phone}@c.us`;
    await this.client.sendMessage(formatted, message);
  }
}

export default WhatsApp