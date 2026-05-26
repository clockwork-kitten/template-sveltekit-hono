import pino from "pino";

/**
 * Structured logger for the server.
 * Outputs JSON in production, pretty-printed in development.
 */
export const logger = pino({
  level: process.env["LOG_LEVEL"] ?? "info",
  transport:
    process.env["NODE_ENV"] === "production"
      ? undefined
      : { target: "pino-pretty" },
});
