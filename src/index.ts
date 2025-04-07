import { Elysia, t } from "elysia";
import { bearer } from '@elysiajs/bearer';

const app = new Elysia()
  .use(bearer())
  .get(
    "/",
    ({ bearer }) => {
      console.log(bearer);
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
