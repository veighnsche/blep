export function vibeBadge({ user, repo, score, href }: { user: string; repo: string; score: number; href: string }): string {
  // Simple SVG badge. Clicking should navigate to the href.
  const label = `VIBE-BLEP`;
  const value = String(score);
  const width = 140;
  const height = 24;
  // NOTE: Keeping defaults and no external assets. Colors are simple.
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" role="img" aria-label="${label}: ${value}">
  <a xlink:href="${href}">
    <rect rx="4" width="${width}" height="${height}" fill="#555"/>
    <rect rx="4" x="80" width="${width - 80}" height="${height}" fill="#4c1"/>
    <g fill="#fff" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="12">
      <text x="40" y="16">${label}</text>
      <text x="${80 + (width - 80) / 2}" y="16">${value}</text>
    </g>
    <title>${user}/${repo}: ${label} ${value}</title>
  </a>
</svg>`
}
