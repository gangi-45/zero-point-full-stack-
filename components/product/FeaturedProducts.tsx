import Link from "next/link";
import type { Product } from "@/types/product";
import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/shared/Button";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featured = products.filter((product) => product.isFeatured);

  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Featured Products
            </h2>
            <p className="mt-2 text-sm text-ink-muted sm:text-base">
              আমাদের সেরা নির্বাচিত ডিভাইসগুলো — সব টেস্টেড ও ওয়ারেন্টিসহ।
            </p>
          </div>
          <Button href="/products" variant="outline" size="sm">
            View All
          </Button>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </section>
  );
}

const CATEGORIES = [
  {
    title: "📱 Phones",
    description: "iPhone, Samsung, Xiaomi ও আরও অনেক ব্র্যান্ডের ফোন — নতুন ও ইউজড।",
    href: "/products",
  },
  {
    title: "💻 Laptops",
    description: "MacBook, Dell, HP — স্টাডি ও অফিসের জন্য সেরা ল্যাপটপ।",
    href: "/products",
  },
  {
    title: "🎧 Accessories",
    description: "হেডফোন, ইয়ারবাড, চার্জার, পাওয়ার ব্যাংক ও আরও অনেক কিছু।",
    href: "/products",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            যা যা পাবেন আমাদের এখানে
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
            নতুন হোক বা ইউজড — প্রতিটি পণ্য কেনার আগে পরীক্ষা করা হয়।
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="glass-card group p-6 transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
            >
              <span className="text-3xl" aria-hidden="true">
                {category.title.split(" ")[0]}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{category.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {category.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

const EXCHANGE_POINTS = [
  {
    title: "মূল্যায়ন ফ্রি",
    description: "আপনার পুরনো ডিভাইসের মূল্য নির্ধারণ সম্পূর্ণ ফ্রি।",
  },
  {
    title: "সাথে সাথে অফার",
    description: "ডিভাইস দেখালেই সাথে সাথে অফার পেয়ে যাবেন।",
  },
  {
    title: "সেরা দামের নিশ্চয়তা",
    description: "বাজারের তুলনায় সেরা এক্সচেঞ্জ ভ্যালু।",
  },
  {
    title: "নগদে ক্রয়",
    description: "পুরনো ডিভাইস বিক্রি করে সরাসরি নগদ টাকা নিন।",
  },
];

export function ExchangePromo() {
  return (
    <section className="py-16">
      <Container>
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                পুরনো ডিভাইস = নতুন আপগ্রেড
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                পুরনো ফোন, ল্যাপটপ বা ট্যাবলেট এনে এক্সচেঞ্জ করে নিয়ে যান নতুন
                ডিভাইস — অথবা বিক্রি করে নিন নগদ টাকা। কোনো ঝামেলা ছাড়াই।
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {EXCHANGE_POINTS.map((point) => (
                  <li
                    key={point.title}
                    className="rounded-2xl border border-slate-100 bg-white/70 px-4 py-3"
                  >
                    <p className="text-sm font-bold text-ink">{point.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-500/10 via-white/40 to-indigo-400/10 p-10">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
              >
                <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />
              </div>
              <div className="relative max-w-sm text-center">
                <p className="text-5xl font-extrabold text-brand-600">
                  ৳3,000
                </p>
                <p className="mt-2 text-base font-semibold text-ink">
                  পর্যন্ত অতিরিক্ত এক্সচেঞ্জ বোনাস
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  আজকের বিশেষ অফার — শুধু এই সপ্তাহের জন্য
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
