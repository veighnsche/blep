import { Hono } from "hono";
import { jsx } from "hono/jsx";
import type { Env } from "../env";
import { Layout } from "../components/Layout";
import { Tree } from "../components/Tree";
import { Markdown } from "../components/Markdown";
import type { TreeItem } from "../lib/github";

const app = new Hono<{ Bindings: Env }>();

app.get("/:user/:repo", async (c) => {
  const { user, repo } = c.req.param();

  // Stub: static tree and sample HTML
  const files: TreeItem[] = [
    { path: ".blep", type: "dir" },
    { path: ".blep/blep.md", type: "file" },
    { path: ".blep/report.json", type: "file" },
  ];

  const html = "<p>BLEP.md goes here</p>"; // Stub HTML

  // TODO: Fetch default branch ref (HEAD), fetch tree from GitHub, render markdown via lib/markdown.
  // TODO: Read and cache via KV using lib/cache helpers.

  return c.html(
    <Layout>
      <h1>{user}/{repo}</h1>
      <h2>.blep/</h2>
      <Tree files={files} />
      <h2>BLEP.md</h2>
      <Markdown html={html} />
    </Layout>
  );
});

export default app;
