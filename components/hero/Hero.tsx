"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight, RefreshCcw, ShieldCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { ExchangeQuoteModal } from "@/components/modal/ExchangeQuoteModal";

const TICKER_ITEMS = [
  "🔥 এক্সচেঞ্জ বোনাস — পুরনো ফোনে ৩,০০০৳ পর্যন্ত অতিরিক্ত মূল্য",
  "⚡ আজই এক্সচেঞ্জ করুন, সাথে সাথে অফার",
  "🛡️ সব প্রোডাক্ট টেস্টেড ও ৭ দিনের ওয়ারেন্টি",
  "💬 WhatsApp এ অর্ডার করুন — দ্রুত ডেলিভারি",
  "💰 সেরা দামের নিশ্চয়তা — Mymensingh এ",
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

export default function Hero() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-slate-50" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8">
          <motion.div {...fadeUp}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-muted shadow-sm backdrop-blur-xl">
              <BadgeCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Mymensingh এর বিশ্বস্ত Buy · Sell · Exchange শপ
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              সেরা দামে <span className="text-brand-600">কিনুন</span>,{" "}
              <span className="text-brand-600">বিক্রি করুন</span>, আর{" "}
              <span className="text-brand-600">এক্সচেঞ্জ</span> করুন
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
              ফোন, ল্যাপটপ ও এক্সেসরিজ — সব টেস্টেড, গ্যারান্টি সহ। পুরনো ডিভাইস
              এক্সচেঞ্জ করে নতুন প্রযুক্তিতে আপগ্রেড করুন, আজই।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/products" size="lg" aria-label="Browse inventory">
                Browse Inventory
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setQuoteOpen(true)}
                aria-label="Get instant exchange quote"
              >
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Instant Exchange Quote
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-ink" lang="bn">
                  ৫০০+ সন্তুষ্ট কাস্টমার
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                <p className="text-sm font-semibold text-ink">
                  টেস্টেড ও ৭ দিনের ওয়ারেন্টি
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-card overflow-hidden p-3">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80&auto=format&fit=crop"
                alt="Featured smartphone showcase at Zero Point"
                width={900}
                height={900}
                priority
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="text-sm font-bold text-ink">
                    iPhone 13 Pro — 128GB
                  </p>
                  <p className="text-xs font-medium text-ink-muted">
                    Like New · Tested &amp; Verified
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                  ৳82,000
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-3xl bg-gradient-to-br from-brand-500/20 to-indigo-400/20 blur-2xl" />
          </motion.div>
        </div>
      </Container>

      <div
        className="relative overflow-hidden border-y border-white/60 bg-white/50 py-3 backdrop-blur-xl"
        aria-hidden="true"
      >
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-10 text-sm font-semibold text-ink-muted"
            >
              <span>{item}</span>
              <span className="text-brand-500">◆</span>
            </span>
          ))}
        </div>
      </div>

      <ExchangeQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}
