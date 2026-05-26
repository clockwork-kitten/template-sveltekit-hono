import { Hono } from "hono";
import { logger } from "./lib/logger.js";
import { api } from "./routes/api.js";

const app = new Hono();

app.route("/api", api);

app.onError((error, c) => {
  logger.error({ err: error }, "Unhandled error");
  return c.json({ error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred" } }, 500);
});

const port = Number(process.env["PORT"] ?? 3000);
logger.info({ port }, "Server starting");

export default {
  port,
  fetch: app.fetch,
};
