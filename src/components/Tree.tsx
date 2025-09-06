import { jsx } from "hono/jsx";
import type { TreeItem } from "../lib/github";

export function Tree({ files }: { files: TreeItem[] }) {
  return (
    <ul>
      {files.map((f) => (
        <li>
          <code>{f.path}</code> <small>({f.type})</small>
        </li>
      ))}
    </ul>
  )
}
