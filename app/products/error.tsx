"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export default function ProductsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="glass-card mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-16 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50 text-red-500">
            <AlertTriangle className="h-8 w-8" aria-hidden="true" />
          </span>
          <h1 className="text-xl font-bold text-ink">কিছু একটা ভুল হয়েছে</h1>
          <p className="text-sm text-ink-muted">
            পণ্যের তালিকা লোড করতে সমস্যা হচ্ছে। দয়া করে আবার চেষ্টা করুন।
          </p>
          <Button onClick={reset} aria-label="Retry loading products">
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
