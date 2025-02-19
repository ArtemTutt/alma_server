const { Telegraf } = require('telegraf');

const bot = new Telegraf("");

// Команда /start
bot.start((ctx) => {
  ctx.sendPhoto(
    { source: "./welcome.png" } 
  ).then(() => {
    ctx.replyWithHTML(
      `
      <b>Добро пожаловать в наше приложение! 🚀</b> 
      
      Зарегистрируйтесь и начните своё путешествие!
      `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Открыть Mini App",
                web_app: { url: "https://almatest-nine.vercel.app" },
              },
            ],
          ],
        },
      }
    );
  });
});

// Запуск бота
bot.launch().then(() => console.log("🤖 Бот запущен!"));

