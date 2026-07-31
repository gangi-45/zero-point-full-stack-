import type { Metadata } from "next";
import { getProducts } from "@/lib/mock-data";
import Hero from "@/components/hero/Hero";
import {
  CategoryShowcase,
  ExchangePromo,
  FeaturedProducts,
} from "@/components/product/FeaturedProducts";
import { VideoSection } from "@/components/video/VideoSection";

export const metadata: Metadata = {
  title: "Buy Sell Exchange in Mymensingh",
  description:
    "Zero Point — Mymensingh এর সেরা ফোন, ল্যাপটপ ও এক্সেসরিজ বাই-সেল-এক্সচেঞ্জ শপ। টেস্টেড পণ্য, সেরা দাম, ৭ দিনের ওয়ারেন্টি।",
};

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <CategoryShowcase />
      <ExchangePromo />
      <VideoSection />
    </>
  );
}
