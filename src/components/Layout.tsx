import { jsx } from "hono/jsx";

export function Layout({ children }: { children?: any }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BLEP</title>
        <style>{`
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 0; }
          header, footer { padding: 12px 16px; background: #111; color: #fff; }
          main { padding: 16px; }
          a { color: #0a84ff; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .container { max-width: 880px; margin: 0 auto; }
        `}</style>
      </head>
      <body>
        <header>
          <div class="container"><strong>BLEP</strong> · Hono + Workers (stub)</div>
        </header>
        <main>
          <div class="container">{children}</div>
        </main>
        <footer>
          <div class="container">© {new Date().getFullYear()} · Stub build</div>
        </footer>
      </body>
    </html>
  )
}
