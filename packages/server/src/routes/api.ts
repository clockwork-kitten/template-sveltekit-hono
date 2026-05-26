import { Hono } from "hono";
import { logger } from "../lib/logger.js";

/**
 * API router — add domain routers here.
 * Keep handlers thin; business logic lives in src/lib/.
 */
export const api = new Hono();

api.get("/health", (c) => {
  logger.info({ path: "/api/health" }, "Health check");
  return c.json({ status: "ok" });
});
