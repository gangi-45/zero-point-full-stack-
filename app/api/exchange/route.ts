import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isSanityConfigured } from "@/sanity/lib/client";
import {
  DEVICE_CONDITIONS,
  isValidPhone,
  parsePositiveInt,
  sanitizeString,
} from "@/lib/api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ExchangePayload = {
  customerName?: unknown;
  phone?: unknown;
  deviceName?: unknown;
  condition?: unknown;
  expectedPrice?: unknown;
  message?: unknown;
};

export async function POST(request: NextRequest) {
  if (!isSanityConfigured()) {
    return NextResponse.json(
      { error: "CMS is not configured on the server" },
      { status: 503 },
    );
  }

  let body: ExchangePayload;
  try {
    body = (await request.json()) as ExchangePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const customerName = sanitizeString(body.customerName, 120);
  const phone = sanitizeString(body.phone, 20);
  const deviceName = sanitizeString(body.deviceName, 120);
  const condition = sanitizeString(body.condition, 20);
  const message = sanitizeString(body.message, 2000);
  const expectedPrice = parsePositiveInt(body.expectedPrice);

  const fields: Record<string, string> = {};
  if (!customerName) fields.customerName = "Customer name is required";
  if (!isValidPhone(phone)) fields.phone = "A valid phone number is required";
  if (!deviceName) fields.deviceName = "Device name is required";
  if (!(DEVICE_CONDITIONS as readonly string[]).includes(condition)) {
    fields.condition = "Condition must be one of: excellent, good, fair, broken";
  }
  if (expectedPrice === null) {
    fields.expectedPrice = "Expected price must be a positive number";
  }

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { error: "Validation failed", fields },
      { status: 400 },
    );
  }

  try {
    const client = getServerClient();
    if (!client) {
      return NextResponse.json(
        { error: "CMS is not configured on the server" },
        { status: 503 },
      );
    }

    const doc = await client.create({
      _type: "inquiry",
      kind: "exchange",
      customerName,
      phone,
      deviceName,
      condition,
      expectedPrice,
      message: message || undefined,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, id: doc._id }, { status: 201 });
  } catch (error) {
    console.error("[api/exchange] failed:", error);
    return NextResponse.json(
      { error: "Failed to save exchange request" },
      { status: 500 },
    );
  }
}
