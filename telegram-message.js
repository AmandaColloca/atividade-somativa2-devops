const TelegramBot = require('node-telegram-bot-api');


const token = '6197720521:AAEp26bTXWLkF1XKcZ2upx7RISXfp1hdj-o';

const chatId = '1053212400';

const bot = new TelegramBot(token, { polling: false });

function sendMessage(message) {
  bot.sendMessage(chatId, message);
}


sendMessage('Aviso de uma nova PR aberta no seu repositório GitHub');
