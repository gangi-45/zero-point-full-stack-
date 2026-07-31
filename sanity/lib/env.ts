export const projectId = process.env.SANITY_PROJECT_ID ?? "";

export const dataset =
  process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const apiVersion = process.env.SANITY_API_VERSION ?? "2024-06-01";

export function isSanityConfigured(): boolean {
  return Boolean(projectId && dataset);
}
