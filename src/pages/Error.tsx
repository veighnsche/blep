import { jsx } from "hono/jsx";
import { Layout } from "../components/Layout";

export function ErrorPage({ message }: { message?: string }) {
  return (
    <Layout>
      <h1>Error</h1>
      <p>{message ?? "An unexpected error occurred."}</p>
    </Layout>
  )
}
