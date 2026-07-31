import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/sanity/product-service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = { params: { slug: string } };

export async function GET(_request: NextRequest, { params }: RouteContext) {
  try {
    const product = await getProductBySlug(params.slug);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    console.error("[api/products/slug] failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}
