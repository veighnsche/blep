import { Hono } from "hono";
import type { Env } from "../env";
import { vibeBadge } from "../lib/svg";

const app = new Hono<{ Bindings: Env }>();

app.get("/:user/:repo", async (c) => {
  const { user, repo } = c.req.param();
  const origin = new URL(c.req.url).origin;
  const href = `${origin}/${user}/${repo}`;

  // TODO: Compare latest commit from GitHub vs cached value (KV key repo:{user}/{repo}:latestCommit)
  // TODO: If different, enqueue a stub "AI check" job (no AI; just placeholder) using c.executionCtx.waitUntil

  const score = 88; // Stub fixed score
  const svg = vibeBadge({ user, repo, score, href });
  return c.body(svg, 200, { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "no-store" });
});

export default app;
