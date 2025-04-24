import dotenv from 'dotenv';
import { getHoliday } from './countriesApi.js';
dotenv.config();
import TelegramBot from 'node-telegram-bot-api';
const token = process.env.TELEGRAM_TOKEN;
const countries = ['US', 'CA', 'GB', 'FR', 'DE', 'IT', 'ES', 'JP'];
const bot = new TelegramBot(token, { polling: true });
const options = {
    reply_markup: {
        inline_keyboard: countries.map((country) => [
            {
                text: country,
                callback_data: country, // Use the country code as the callback data
            },
        ]),
    }
}

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to the Holiday Bot! Please select a country:', options);
});

// Callback query handler
bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const country = query.data; // Get the selected country from the callback data
    // Call the getHoliday function with the selected country
    const holiday = await getHoliday(country);
    // Send the holiday information back to the user
    bot.sendMessage(chatId, `The holiday in ${country} is: ${holiday}`);
});