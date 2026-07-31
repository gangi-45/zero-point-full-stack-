export const PRODUCT_CATEGORIES = ["phone", "accessory", "laptop"] as const;
export const PRODUCT_CONDITIONS = ["new", "used"] as const;
export const DEVICE_CONDITIONS = ["excellent", "good", "fair", "broken"] as const;

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizeString(value: unknown, maxLength = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(CONTROL_CHARS, "").slice(0, maxLength);
}

export function parsePositiveInt(value: unknown): number | null {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num) || num <= 0) return null;
  return Math.floor(num);
}

export function isValidPhone(phone: string): boolean {
  return /^\+?[0-9]{7,15}$/.test(phone);
}
