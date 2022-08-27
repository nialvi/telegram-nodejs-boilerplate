declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      STORAGE_PATH: string;
    }
  }
}

export {}
