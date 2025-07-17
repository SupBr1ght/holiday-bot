# Holiday bot
## Getting started

## Demo

User: `/start`  
Bot: ⬇️ *(shows keyboard with flags)*  
User: 🇩🇪  
Bot: *"Today in Germany: German Unity Day 🇩🇪"*

---

## Features

- Inline emoji keyboard with 4–8 countries
- Replies with today's holiday based on the selected country
- Uses external API for real-time holiday info
- Easy to extend with more countries or other data

---

## How to Run

```bash
git clone https://github.com/your-username/holiday-bot.git
cd holiday-bot
npm install

Create a .env file based on the .env.example:
TELEGRAM_TOKEN=your_telegram_bot_token
HOLIDAY_API_KEY=your_calendarific_key

Then run the bot:
node holiday-bot.js
