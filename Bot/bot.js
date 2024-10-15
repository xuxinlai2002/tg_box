const { Telegraf } = require("telegraf");
const TOKEN = "7840898822:AAEGn0M0IDVc3Mg13_kaaf9fX5VUjnNywrw";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome 123 --- :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

// 添加错误处理
bot.catch((err, ctx) => {
  console.error(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

// 使用 bot.launch() 启动 bot
bot.launch().then(() => {
  console.log('Bot is running');
}).catch((err) => {
  console.error('Failed to start bot:', err);
});

// 优雅停机
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
