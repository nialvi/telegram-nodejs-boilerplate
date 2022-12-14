import { inject, injectable, TYPES } from '../composition/index.js';
import { Scenes, Telegraf } from 'telegraf';
import { Config } from '../config/index.js';

export interface Bot {
	start(): void;
	stop(message: string): void;
	// TODO add type for ctx
	text(cb: (ctx: any) => void): void;
}

@injectable()
export class TelegramBotModel implements Bot {
	bot: Telegraf<Scenes.SceneContext<Scenes.SceneSessionData>>;

	constructor(@inject(TYPES.AppConfig) private config: Config) {
		this.bot = new Telegraf<Scenes.SceneContext>(
			this.config.getData().botToken,
		);
	}

	start() {
		this.bot.launch();
	}

	stop() {
		this.bot.stop();
	}

	text(cb) {
		this.bot.on('text', cb);
	}
}
