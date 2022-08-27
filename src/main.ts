import { Scenes, Telegraf } from 'telegraf';

const bot = new Telegraf<Scenes.SceneContext>(process.env.BOT_TOKEN);

const main = async () => {
  bot.launch();

  bot.on('text', (ctx) => {
    ctx.reply('Hello!');
  });

  console.log('BOT IS STARTED 🚀');
};

main().catch((e) => console.error(e));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
