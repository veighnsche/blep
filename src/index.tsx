import { Hono } from "hono";
import { jsx } from "hono/jsx";
import type { Env } from "./env";
import artifact from "./routes/artifact";
import badge from "./routes/badge";
import raw from "./routes/raw";
import { Layout } from "./components/Layout";
import { NotFound } from "./pages/NotFound";
import { ErrorPage } from "./pages/Error";

const app = new Hono<{ Bindings: Env }>();

// Root landing page
app.get("/", (c) => {
  const origin = new URL(c.req.url).origin;
  return c.html(
    <Layout>
      <h1>BLEP (stub)</h1>
      <p>
        This is a stubbed Cloudflare Worker using Hono + JSX SSR. No external network calls are made yet.
      </p>
      <h2>Docs</h2>
      <ul>
        <li><a href="https://hono.dev/">Hono</a></li>
        <li><a href="https://developers.cloudflare.com/workers/">Cloudflare Workers</a></li>
      </ul>
      <h2>Example</h2>
      <ul>
        <li><a href={`${origin}/blep/example`}>{origin}/blep/example</a></li>
        <li><a href={`${origin}/badge/blep/example.svg`}>{origin}/badge/blep/example.svg</a></li>
      </ul>
    </Layout>
  );
});

// Mount routes
app.route("/badge", badge);
app.route("/raw", raw);
app.route("/", artifact); // artifact defines /:user/:repo

// Not found & error handlers
app.notFound((c) => c.html(<NotFound />));
app.onError((err, c) => c.html(<ErrorPage message={err?.message} />));

export default app;

export const scheduled = async (event: ScheduledEvent, env: Env, ctx: ExecutionContext) => {
  // TODO: Periodic refresh of caches (e.g., latestCommit, blepTree, badge svg)
  // For now this is a stub and does nothing.
};
