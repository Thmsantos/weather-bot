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

Local to discovery your open weather api key -> [open weather site](https://open-meteo.com/)

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

## 🧱 Architecture

This project follows a **modular and layered architecture**, separating responsibilities for better scalability and maintainability.


```
src/
config/ → Environment variables and configuration
contracts/ → Type definitions and data schemas (Zod)
jobs/ → Scheduled tasks (cron jobs)
service/ → Business logic and external integrations
utils/ → Shared utility functions
index.ts → Application entry point
```

---
## 🔹 Layers Explained

### 📦 config/
Handles environment configuration and validation.
- Loads `.env`
- Centralizes config access

---
### 🧾 contracts/
Defines application data structures.
- Weather response types
- Forecast schemas
- Validation using Zod

---
### ⏰ jobs/
Responsible for automation.
- Cron scheduling
- Triggers weather sending job

---
### ⚙️ service/
Core of the application.
- Weather API integration
- Forecast processing
- WhatsApp message sending

---
### 🧰 utils/
Reusable helpers used across the app.

---
### 🚀 index.ts
Application entry point.

- Initializes services
- Starts scheduled jobs
- Boots the WhatsApp client

---

## 📄 License
MIT