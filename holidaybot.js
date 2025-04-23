const dotenv = require('dotenv');
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if (text === '/start') {
        bot.sendMessage(chatId, 'Welcome to the Holiday Bot! Type /holiday to get a random holiday.');
    } else {
        bot.sendMessage(chatId, 'I don\'t understand that command. Type /start to see the available commands.');
    }
});