import { NextRequest, NextResponse } from "next/server";
import { getProductsByFilter } from "@/sanity/product-service";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_CONDITIONS,
} from "@/lib/api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const params = new URL(request.url).searchParams;

    const category = params.get("category");
    const condition = params.get("condition");
    const featured = params.get("featured");
    const q = params.get("q");

    const categoryValid =
      category !== null &&
      (PRODUCT_CATEGORIES as readonly string[]).includes(category);
    const conditionValid =
      condition !== null &&
      (PRODUCT_CONDITIONS as readonly string[]).includes(condition);

    const products = await getProductsByFilter({
      category: categoryValid ? (category as "phone" | "accessory" | "laptop") : undefined,
      condition: conditionValid ? (condition as "new" | "used") : undefined,
      featured: featured === "true",
      query: q ?? undefined,
    });

    return NextResponse.json(products, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    console.error("[api/products] failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
