import { Scenes, Telegraf } from 'telegraf';
import { getConfig } from './config/index.js';
import { DataBaseService } from './database.js';

const main = async (config: AppConfig): Promise<void> => {
  console.log(config);
  const bot = new Telegraf<Scenes.SceneContext>(config.botToken);
  const db = new DataBaseService(config);

  bot.launch();

  bot.on('text', (ctx) => {
    console.log(ctx);
    db.writeMessage(ctx.update.message.text, ctx.update.message.date);
    ctx.reply('Hello!');
  });

  console.log('BOT IS STARTED 🚀');

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

getConfig()
  .then((config) => {
    main(config);
  })
  .catch((e) => console.error(e));
