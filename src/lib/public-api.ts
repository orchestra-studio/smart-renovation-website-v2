import { siteConfig } from "@/data/site";

export async function publicPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${siteConfig.apiUrl}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: response.statusText }));
    throw new Error(error.detail || `Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export interface LeadCaptureResponse {
  lead_id: string;
  score: number;
  tier: "hot" | "warm" | "cold";
}
