import type { Env } from "../env";

// Keys to consider (documented):
// - repo:{user}/{repo}:latestCommit
// - repo:{user}/{repo}:blepTree:HEAD
// - file:{user}/{repo}:HEAD:.blep/blep.md (text)
// - badge:{user}/{repo}:svg

export async function getJSON<T>(env: Env, key: string): Promise<T | null> {
  // TODO: Implement KV get and JSON.parse with TTL awareness
  // const raw = await env.BLEP_CACHE.get(key)
  // return raw ? (JSON.parse(raw) as T) : null
  return null
}

export async function setJSON(env: Env, key: string, value: unknown, ttlSeconds?: number): Promise<void> {
  // TODO: Implement KV put with optional TTL
  // await env.BLEP_CACHE.put(key, JSON.stringify(value), ttlSeconds ? { expirationTtl: ttlSeconds } : {})
}

export async function getText(env: Env, key: string): Promise<string | null> {
  // TODO: Implement KV get text with TTL awareness
  return null
}

export async function setText(env: Env, key: string, value: string, ttlSeconds?: number): Promise<void> {
  // TODO: Implement KV put text with optional TTL
}
