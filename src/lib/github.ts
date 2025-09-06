export type TreeItem = { path: string; type: "file" | "dir" }

export async function fetchLatestCommit(user: string, repo: string, token?: string): Promise<{ sha: string }> {
  // TODO: Use GitHub REST API: GET /repos/:owner/:repo/commits?per_page=1
  // Respect optional token via Authorization: token ...
  // For now return hardcoded sample data
  return { sha: "deadbeefcafebabe000000000000000000000000" }
}

export async function fetchBlepTree(user: string, repo: string, ref: string, token?: string): Promise<TreeItem[]> {
  // TODO: Use GitHub REST API: GET /repos/:owner/:repo/git/trees/:ref?recursive=1
  // Filter to paths under .blep/
  // For now return a hardcoded sample tree
  return [
    { path: ".blep", type: "dir" },
    { path: ".blep/blep.md", type: "file" },
    { path: ".blep/report.json", type: "file" }
  ]
}

export async function fetchFileText(user: string, repo: string, ref: string, path: string, token?: string): Promise<string> {
  // TODO: Use raw endpoint: https://raw.githubusercontent.com/:owner/:repo/:ref/:path
  // For now, return a simple placeholder
  return "# BLEP\n\nThis is a placeholder for blep.md.\n"
}
