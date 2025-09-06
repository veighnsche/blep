import { Hono } from "hono";
import type { Env } from "../env";

const app = new Hono<{ Bindings: Env }>();

app.get("/:user/:repo/*", async (c) => {
  const { user, repo } = c.req.param();
  const path = c.req.param("*");
  // TODO: Stream raw from GitHub (raw.githubusercontent.com) for public files like .blep/assets/*
  return c.text(`raw would stream here for ${user}/${repo}/${path}`);
});

export default app;
