import { jsx } from "hono/jsx";
import { Layout } from "../components/Layout";

export function NotFound() {
  return (
    <Layout>
      <h1>Not Found</h1>
      <p>The page you requested could not be found.</p>
    </Layout>
  )
}
