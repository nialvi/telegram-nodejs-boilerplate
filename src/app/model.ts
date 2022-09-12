import { injectable, inject, TYPES } from '../composition/index.js';

import { Bot } from '../bot/model.js';
import { Logger } from '../logger/index.js';
import { Storage } from '../storage/index.js';

export interface Application {
	start(): void;
	stop(message: string): void;
}

@injectable()
export class AppModel implements Application {
	constructor(
		@inject(TYPES.Logger) private logger: Logger,
		@inject(TYPES.Storage) private storage: Storage,
		@inject(TYPES.Bot) private bot: Bot,
	) {}

	start() {
		this.logger.info('BOT IS STARTED 🚀');

		this.bot.start();

		this.bot.text(async (ctx) => {
			this.logger.info('action text', ctx.update.message);

			const result = await this.storage.writeMessage(
				ctx.update.message.text,
				ctx.update.message.date,
			);

			this.logger.info('status write message:', result.status);

			ctx.reply('Hello world!');
		});
	}

	stop(message: string): void {
		this.bot.stop(message);
	}
}
