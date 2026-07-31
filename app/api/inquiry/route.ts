import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isSanityConfigured } from "@/sanity/lib/client";
import { isValidPhone, sanitizeString } from "@/lib/api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type InquiryPayload = {
  name?: unknown;
  phone?: unknown;
  product?: unknown;
  message?: unknown;
};

export async function POST(request: NextRequest) {
  if (!isSanityConfigured()) {
    return NextResponse.json(
      { error: "CMS is not configured on the server" },
      { status: 503 },
    );
  }

  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = sanitizeString(body.name, 120);
  const phone = sanitizeString(body.phone, 20);
  const productSlug = sanitizeString(body.product, 120);
  const message = sanitizeString(body.message, 2000);

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Name is required";
  if (!isValidPhone(phone)) fields.phone = "A valid phone number is required";
  if (!productSlug) fields.product = "Product is required";

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

    const productRef = await client.fetch<{ _id: string } | null>(
      `*[_type == "product" && slug.current == $slug][0] { _id }`,
      { slug: productSlug },
    );

    const doc = await client.create({
      _type: "inquiry",
      kind: "product",
      customerName: name,
      phone,
      product: productRef ? { _type: "reference", _ref: productRef._id } : undefined,
      message: message || undefined,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, id: doc._id }, { status: 201 });
  } catch (error) {
    console.error("[api/inquiry] failed:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 },
    );
  }
}
