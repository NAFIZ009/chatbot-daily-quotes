const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

// Parse incoming JSON requests
app.use(express.json());


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log(messageText);
    bot.sendMessage(chatId, `You said: ${messageText}`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});