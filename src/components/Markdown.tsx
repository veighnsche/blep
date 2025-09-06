import { jsx } from "hono/jsx";

export function Markdown({ html }: { html: string }) {
  // TODO: Sanitize HTML before rendering to prevent XSS.
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
