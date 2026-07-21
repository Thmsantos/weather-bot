# 🌤️ Weather WhatsApp Bot

> Automated WhatsApp bot that sends daily weather forecasts (temperature, rain probability, and conditions) directly to your phone.

---

## 🚀 Features

- 📊 Daily weather report (temperature, humidity, wind, etc.)
- 🌧️ Rain probability calculation
- 📍 Multiple locations support
- 📱 Send messages to multiple phone numbers
- ⏰ Scheduled job (runs every day at 5 AM)
- ✅ Data validation with Zod
- 🧠 Clean and modular architecture

---

## 🛠️ Tech Stack

- Node.js
- TypeScript
- whatsapp-web.js
- Axios
- Zod
- node-cron
- Pino

---

## 📦 Installation

```bash
git clone https://github.com/Thmsantos/weather-bot.git
cd weather-bot
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.dev` file:

```
WEATHER_KEY=your_openweather_api_key
PHONES=55XXXXXXXXXXX,55XXXXXXXXXX
LOCALIZATIONS=São Paulo,Consolação,Jabaquara
```

---

## ▶️ Running

```bash
npm run dev
```

---

## 📱 First Run

Scan the QR code shown in the terminal using WhatsApp.

---

## ⏰ Schedule

Runs every day at 05:00 AM.

---

## 📁 Structure

```
src/
  config/
  contracts/
  jobs/
  service/
  utils/
```

---

## 📄 License

MIT