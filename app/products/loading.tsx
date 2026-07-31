import { Container } from "@/components/shared/Container";
import { ProductGridSkeleton } from "@/components/product/ProductGridSkeleton";

export default function ProductsLoading() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="mb-8 space-y-3">
          <div className="skeleton-shimmer h-9 w-56 rounded-2xl" />
          <div className="skeleton-shimmer h-4 w-96 max-w-full rounded-lg" />
        </div>
        <div className="mb-6 space-y-3">
          <div className="skeleton-shimmer h-12 w-full rounded-2xl" />
          <div className="skeleton-shimmer h-10 w-full rounded-2xl" />
        </div>
        <ProductGridSkeleton count={8} />
      </Container>
    </div>
  );
}
