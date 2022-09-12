# Telegram nodejs boilerplate

## Dev mode

```bash
npm run dev
```

## Env

You need to use file `.env.example` and create `.env`.

Use command `npm run gen-env` for generate new types for env variables.

All firebase configuration is placed in `.env`

If you add new env variables, you will need to map env variables to a config object in folder `config`.

## Stack

- nodejs
- typescript
- inversify
- telegraf
- firebase
- log4js

## Todos

[ ] - create build folder before first run `npm run dev`
[x] - fix TS warnings on `node_modules/@firebase/auth/`
